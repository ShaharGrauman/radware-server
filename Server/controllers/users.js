

const { users, roles } = require("../models/");
const { roles_users } = require("../models/index")
const { userCreation } = require('../middleware/validations');


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

        return newUser;
    }
    catch (error) {
        throw new Error(`Cant create user: ${error.message}`);
    }
}

const editUser = async (userData, id) => {
    try {
        const editUser = await users.update({
            name: userData.name,
            username: userData.username,
            password: userData.password,
            phone: userData.phone
        },
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

        await roles_users.bulkCreate(rolesUsers, { returning: true });

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