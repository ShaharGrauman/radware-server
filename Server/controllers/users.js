const { users, roles  } = require("../models/");
const { roles_users, historyUsersActions } = require("../models/index")
const { userCreation,userUpdate } = require('../middleware/validations');
//>>>>>>> master
const getUserWithRoles = async (userId) => {
    if (!userId) {
        try {
            const data = await users.findAll({
                attributes: ['id', 'username', 'phone', 'status'],
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
                    attributes: ['name', 'username', 'password', 'phone'],
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
            historyUsersActions.create({ userId: '1', action_name: "delete",
            description: "deleted user",
            time:new Date().toLocaleTimeString('en-US', { hour12: false, 
               hour: "numeric", 
               minute: "numeric"}), date: new Date()
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
        const newUser = await users.create({
            name: userData.name,
            username: userData.username,
            phone: userData.phone,
            password: userData.password,
        });

        updateRolesUsers(userData.roles, newUser.id);
        historyUsersActions.create({ userId: '1', action_name: "add",
        description: "created user "+newUser.id,
        time:new Date().toLocaleTimeString('en-US', { hour12: false, 
           hour: "numeric", 
           minute: "numeric"}), date: new Date()
   });
        return newUser;
    }
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
        const editUser = await users.update({
            name: userData.name,
            username: userData.username,
            password: userData.password,
            phone: userData.phone
        },
        historyUsersActions.create({ userId: '1', action_name: "edit",
        description: "edited user "+userData.name,
        time:new Date().toLocaleTimeString('en-US', { hour12: false, 
           hour: "numeric", 
           minute: "numeric"}), date: new Date()
   }),
            {
                returning: true, where: { id: id }
            });

        const roles = userData.roles;
        roles_users.destroy({
            where: { user_Id: id }
        });

        //Updating roles_users table
        updateRolesUsers(roles, id);
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
//<<<<<<< HEAD
        roles_users.bulkCreate(rolesUsers, {returning: true})
    
//=======

        await roles_users.bulkCreate(rolesUsers, { returning: true });
        historyUsersActions.create({ userId: '1', action_name: "edit",
        description: "created user "+newUser.id,
        time:new Date().toLocaleTimeString('en-US', { hour12: false, 
           hour: "numeric", 
           minute: "numeric"}), date: new Date()
   });

//>>>>>>> master
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