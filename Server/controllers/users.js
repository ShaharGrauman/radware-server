const User = require("../models/users");

const findAll = async () => {
    try{
        const users = await User.getAll();
        return users;
    }catch(error){
        throw new Error(`Cant get users: ${error.message}`);
    }
}


module.exports = {
    findAll,
};