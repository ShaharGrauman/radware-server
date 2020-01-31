const { users ,roles } = require("../models/");


const findAll = async () => {
    try {
        const data = await users.findAll();
        return data;
    } catch (error) {
        throw new Error(`Cant get users: ${error.message}`);
    }
}

const getUserWithRoles = async () => {
    try {
        const data = await users.findAll({
            attributes:['id','username','phone','status'],
            include:{model:roles,attributes:['description'],through: {attributes: []}}
        });
        return data;
    } catch (error) {
        throw new Error(`Cant get users with roles: ${error.message}`);
    }
}
      
const createUser = async (userData) => {
    console.log(userData);
    try {
        const newUser = await users.create({
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

module.exports = {
    findAll,
    getUserWithRoles,
    createUser
};