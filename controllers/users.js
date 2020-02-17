const { users, roles  } = require("../models/");
const { roles_users, historyUsersActions } = require("../models/index")
const { userValidation } = require("../middleware/validations");
const { userCreation,userUpdate } = require('../middleware/validations');
//>>>>>>> master
const { encrypt } = require("./encrypt")


const getUserWithRoles = async (userId) => {
    if (!userId) {
        try {
            const data = await users.findAll({
                attributes: ['id','name', 'username', 'phone', 'status'],

                include: { model: roles, attributes: ['description'], through: { attributes: [] } }
            });
            return data;
        } catch (error) {
            throw new Error(`Cant get user: ${error.message}`);
        }
    }
    else {
        try {
            const user = await users.findByPk(userId,
                {
                    attributes: ['id','name', 'username', 'password', 'phone'],
                    include: { model: roles, attributes: ['id', 'name'], through: { attributes: [] } }
                });
            return user;
        } catch (error) {
            throw new Error(`Cant get user: ${error.message}`);
        }
    }
}


const deleteUser = async (username) => {
    users.update(
        { status: 'deleted' },
        { where: { username: username } }
    )
        .then(function () {
            historyUsersActions.create({
                userId: '1', action_name: "delete",
                description: "deleted user",
                time: new Date().toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: "numeric",
                    minute: "numeric"
                }), date: new Date()
            })
            return 'deleted successfully'
        }).catch(function (error) {
            return (error);
        });
}

const createUser = async (userData) => {
    // const result = await Joi.validate(userData, userCreation);
    // console.log(result);
    // if (!result) {
    //     return result;
    // }
 
    try {
        const userAlreadyExist = await users.findOne({
            where:{username:userData.username}
        })

        if(userAlreadyExist){
            throw new Error(`User is already exists with id: ${userAlreadyExist.id}`)
        }
            
        else{
        const newUser = await users.create({
            name: userData.name,
            username: userData.username,
            phone: userData.phone,
            password: encrypt(userData.password)
        });

        updateRolesUsers(userData.roles, newUser.id);
        historyUsersActions.create({
            userId: newUser.id, action_name: "add",
            description: `created user: ${newUser.id}`,
            time: new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: "numeric",
                minute: "numeric"
            }), date: new Date()
        });
        return newUser.id;
    }}
        catch (error) {
        throw new Error(`Cant create user: ${error.message}`);
    }
}

const editUser = async (DataToUpdate, id) => {
    // const result = await Joi.validate(DataToUpdate,userUpdate);
    // console.log(result);
    // if (!result) {
    //     return result;
    // }
    // console.log(DataToUpdate);
    try {


        if (userData.name != undefined || userData.name.length != 0) {
            await users.update({
                name: userData.name
            },
                {
                    returning: true, where: { id: id }
                });
        }


        if (userData.username != undefined || userData.username.length != 0 ) {
            await users.update({
                username: userData.username
            },
                {
                    returning: true, where: { id: id }
                });
        }

        const roles = userData.roles;
        roles_users.destroy({
            where: { user_Id: id }
        });


        if (userData.password != undefined || userData.password.length != 0) {
            await users.update({
                password: encrypt(userData.password)
            },
                {
                    returning: true, where: { id: id }
                });
        }


        if (userData.phone != undefined || userData.phone.length != 0) {
            await users.update({
                phone: userData.phone
            },
                {
                    returning: true, where: { id: id }
                });
        }

        historyUsersActions.create({
            userId: '1', action_name: "edit",
            description: "edited user 1" ,
            time: new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: "numeric",
                minute: "numeric"
            }), date: new Date()
        })

        if (userData.roles != undefined || userData.roles.length != 0) {
            const roles = userData.roles;

            roles_users.destroy({
                where: { user_Id: id }
            });

            //Updating roles_users table
            updateRolesUsers(roles, id);
        }
    }
    catch (error) {
        throw new Error(`Cant create user: ${error.message}`);
    }
}

const updateRolesUsers = async (roles, userId) => {
    try {
        var rolesUsers = [];
        for (var i = 0; i < roles.length; i++) {
            var roleUser = {
                role_id: roles[i],
                user_id: userId
            };
            rolesUsers.push(roleUser);
        }
        roles_users.bulkCreate(rolesUsers, {returning: true})
    

        await roles_users.bulkCreate(rolesUsers, { returning: true });
        historyUsersActions.create({
            userId: '1', action_name: "edit",
            description: "created user " + newUser.id,
            time: new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: "numeric",
                minute: "numeric"
            }), date: new Date()
        });

    }
    catch (error) {
        throw new Error(`Cant create user: ${error.message}`);
    }

}

module.exports = {
    getUserWithRoles,
    deleteUser,
    createUser,
    editUser
};