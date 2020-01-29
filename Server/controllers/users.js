const { users ,roles} = require("../models/");


const getAll = async () => {
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
        throw new Error(`Cant get users: ${error.message}`);
    }
}




module.exports = {
    getAll,
    getUserWithRoles
};