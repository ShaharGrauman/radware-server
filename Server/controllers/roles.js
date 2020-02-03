const { roles, permissions } = require('../models');
const { permissions_roles } = require('../models/index');


const getRoleWithPermissions = async () => {
    try {
        const rolesData = await roles.findAll({
            attributes: ['id','name'],
            include: [{ model: permissions ,attributes:['name']}]
          })
return rolesData;
    } catch (error) {
    throw new Error(`Cant get roles: ${error.message}`);
}
}

// const create = async (data) =>{
//     console.log(data);
//     try{
//         const rolesData = await roles.create({
//             id: data.id,
//             name: data.name,
//             description: data.description
//         });
//         return rolesData;
//     }catch(error){
//         throw new Error(`Cant create roles: ${error.message}`);
//     }
// }


const getRoles = async () => {
    try {
        const rolesData = await roles.findAll({
            attributes: ['id', 'name']
        })
        return rolesData;
    } catch (error) {
        throw new Error(`Cant get roles: ${error.message}`);
    }
}

module.exports = {
    getRoleWithPermissions,
    getRoles
    // create
};
