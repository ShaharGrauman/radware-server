const Admin = require("../models/admin");

const findAll = async () => {
    try{
        const roles = await Admin.getAllRoles();
        return roles;
    }catch(error){
        throw new Error(`Can't get roles: ${error.message}`);
    }
}

module.exports = {findAll}