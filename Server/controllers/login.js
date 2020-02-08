const { users, roles, login, file} = require('../models');
const { loginAttempt } = require('../middleware/validations');
require('./sendEmail');




const Login = async (user) => {
    const result = await Joi.validate(user, loginAttempt);
    console.log(result);
    if (!result) {
        return result;
    }

    try {
        const userExist = await users.findOne( {
        attributes: ['id','name'],
        include:[{model: roles, attributes: ['name'], through: {attributes: []}}],
        where: { username: user.username, password: user.password }})

        if(userExist){

            let userStatus = await users.findOne({attributes: ['status'], where: { username: user.username, password: user.password}})

            if(userStatus.status === 'locked')
                return "Your account is already locked"
            else if (userStatus.status === 'deleted')
                return "Your account is already deleted"

                //create login
            try{
                  login.create({
                    user_id: userExist.id,
                      time: new Date().getTime(),
                      date: new Date().toLocaleString("he-IL"),
                      success: 0
                  })
                 }catch(error){
                  throw new Error(`Cant create login: ${error.message}`);
              }

            return userExist
        }

        else{
            const exist = await users.findOne({where: { username: user.username}})

            if(exist){// valid username with incorrect pass

                if(exist.status === 'locked')
                return "Your account is already locked"
            else if (exist.status === 'deleted')
                return "Your account is already deleted"
                    

                const lastLogin = await login.findOne({
                    include:[{model: users}],
                    where:{user_id: exist.id},
                    order: [['date', 'DESC'],['time', 'DESC']]
                }
                )

                if(!lastLogin){ // if this is the first login for this user

                    try{
                        login.create({
                          user_id: exist.id,
                            time: new Date().toLocaleTimeString("he-IL"),
                            date: new Date().toLocaleString("he-IL"),
                            success: 1
                        })
                       }catch(error){
                        throw new Error(`Cant create login: ${error.message}`);
                    }
                }

                else{ // increment success field to this user
                    lastLogin.success++
                    login.update({
                        success: lastLogin.success
                    },
                        {returning: true, where: { id: lastLogin.id } 
                    })
                    
                    if(lastLogin.success == 3){
                        users.update({
                            status: "locked"
                        },
                        
                         {returning: true, where: { id: lastLogin.user_id }
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

module.exports = {Login};