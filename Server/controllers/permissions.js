const { roles, permissions } = require('../models');
const { permissions_roles } = require('../models/index');
const getPermissions = async () => {
    try {
        const permissionData = await permissions.findAll({
            attributes: ['id', 'name']
        })
        return permissionData;
    } catch (error) {
        throw new Error(`Cant get Permissions: ${error.message}`);
    }
}


module.exports = {
    getPermissions
    // create
};