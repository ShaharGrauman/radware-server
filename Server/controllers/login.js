const { users, roles, login, file, permissions, permissions_roles, roles_users } = require('../models');
const { loginAttempt } = require('../middleware/validations');
const { sendEmail } = require('./sendEmail');
const { encrypt } = require("./encrypt")


const Login = async (user) => {
    // const result = await Joi.validate(user, loginAttempt);
    // console.log(result);
    // if (!result) {
    //     return result;
    // }

    try {
        const userExist = await users.findOne({
            attributes: ['id', 'username'],
            include: [{
                model: roles, attributes: ['id', 'name'],
                through: { attributes: [] },
                include: [{
                    model: permissions,
                    through: { attributes: [] }
                }]
            }],
            where: { username: user.username, password: encrypt(user.password) }
        })
        if (userExist) {

            let userStatus = await users.findOne({ attributes: ['status'], where: { username: user.username, password: encrypt(user.password) } })

            if (userStatus.status === 'locked')
                return "Your account is already locked"
            else if (userStatus.status === 'deleted')
                return "Your account is already deleted"

            //create login
            try {
                login.create({
                    user_id: userExist.id,
                    time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric" }),
                    date: new Date().toLocaleString("he-IL"),
                    success: 0
                })
            } catch (error) {
                throw new Error(`Cant create login: ${error.message}`);
            }
            return userExist
        }

        else {
            const exist = await users.findOne({ where: { username: user.username } })

            if (exist) {// valid username with incorrect pass

                if (exist.status === 'locked')
                    return "Your account is already locked"
                else if (exist.status === 'deleted')
                    return "Your account is already deleted"


                const lastLogin = await login.findOne({
                    include: [{ model: users }],
                    where: { user_id: exist.id },
                    order: [['date', 'DESC'], ['time', 'DESC']]
                }
                )

                if (!lastLogin) { // if this is the first login for this user

                    try {
                        login.create({
                            user_id: exist.id,
                            time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric" }),
                            date: new Date().toLocaleString("he-IL"),
                            success: 1
                        })
                    } catch (error) {
                        throw new Error(`Cant create login: ${error.message}`);
                    }
                }

                else { // increment success field to this user
                    lastLogin.success++
                    login.update({
                        success: lastLogin.success
                    },
                        {
                            returning: true, where: { id: lastLogin.id }
                        })

                    if (lastLogin.success == 3) {
                        users.update({
                            status: "locked"
                        },

                            {
                                returning: true, where: { id: lastLogin.user_id }
                            })

                        sendMail(`<h1>Unfortunately! your account ${exist.username} is locked after 3 invalid login attempts</h1>`);
                        return "Incorrect email or password, Your account is locked Now"
                    }
                }
            }

            return "Incorrect email or password"
        }

    } catch (error) {
        throw new Error(`Cannot login: ${error.message}`);
    }
}



const reset = async (username) => {
    try {
        const user = await users.findOne({
            where: { username: username } //checking if the email address sent by client is present in the db(valid)
        });
        if (user) {
            var tempPwd = Math.random().toString(36).slice(-8);
            await users.update({ password: encrypt(tempPwd) },
                {
                    returning: true, where: { id: user.id }
                }
            );
            sendEmail(user.username, `<h1>Reset Password => temp password: ${tempPwd}</h1>`);
            return user.username;
        }
        else {
            throw new Error('No user found with that email address.')
        }
    } catch (error) {
        throw new Error(`${error.message}`);
    }
}


const updatePassword = async (user) => {
    try {

        const tempPwd = await users.findOne({
            where: { password: encrypt(user.tempPwd) }
        });

        const username = await users.findOne({
            where: { username: user.username }
        });

        if (!username) {
            throw new Error('incorrect username');
        }

        if (tempPwd) {
            try {
                const editPwd = await users.update({
                    password: encrypt(user.newPwd)
                },
                    {
                        returning: true, where: { username: user.username }
                    });
            }
            catch (error) {
                throw new Error(`Cant edit user: ${error.message}`);
            }
        }
        else {
            throw new Error('incorrect temp password');
        }


    } catch (error) {
        throw new Error(`${error.message}`);
    }
}

module.exports = { Login, reset, updatePassword };