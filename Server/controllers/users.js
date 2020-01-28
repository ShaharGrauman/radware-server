const {users} = require('../models');

const findAll = async () => {
    try {
        const users = await User.getAll();
        return users;
    } catch (error) {
        throw new Error(`Cant get users: ${error.message}`);
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
    createUser
};