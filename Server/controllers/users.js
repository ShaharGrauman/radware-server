const { users, roles} = require("../models/");
const {roles_users} = require("../models/index")


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
                {attributes: ['name', 'username', 'password', 'phone'],
                include: { model: roles, attributes: ['id', 'name'], through: { attributes: [] } }
            });
            return user;
        } catch (error) {
            throw new Error(`Cant get user: ${error.message}`);
        }
    }
}

const createUser = async (userData) => {
    try {
        const newUser = await users.create({
            name: userData.name,
            username: userData.username,
            phone: userData.phone,
            password: userData.password,
            status: userData.status
        });
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
            {returning: true, where: { id: id } 
        });
        
        const roles = userData.roles;

        roles_users.destroy({
            where: { user_Id: id }
        });

        var rolesUsers = [];
        for (var i=0; i < roles.length; i++){
            var roleUser = {
                role_id: roles[i],
                user_id: id
            };
            rolesUsers.push(roleUser);
        }

        roles_users.bulkCreate(rolesUsers, {returning: true})
    
    }
    catch (error) {
        throw new Error(`Cant create user: ${error.message}`);
    }
}



module.exports = {
    getUserWithRoles,
    createUser,
    editUser
};