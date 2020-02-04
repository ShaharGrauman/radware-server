

const { users ,roles } = require("../models");
const { userCreation } = require('../middleware/validations');


const findAll = async () => {
    try {
        const data = await users.findAll();
        return data;
    }catch (error) {
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
 

const deleteUser = async (username) => {
    users.update(
        {status: 'deleted'},
        {where: {username: username}}
      )
      .then(function() {
        return 'deleted successfully'
      }).catch(function(error) {
        return (error);
      });
}
const createUser = async (userData) => {
    const result = await Joi.validate(userData, userCreation);
    console.log(result);
    if (!result) {
        return result;
    }

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
    createUser,
    deleteUser
};