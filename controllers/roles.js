const { roles, permissions, historyUsersActions } = require('../models');
const { permissions_roles } = require('../models/index');
const { roleValidation } = require("../middleware/validations");


// const getRoles = async (roleId) => {
//     if (userId) {
//         try {
//             const user = await users.findByPk(userId);
//             return user;
//         } catch (error) {
//             throw new Error(`Cant get user: ${error.message}`);
//         }
//     }
//     else {
//         try {
//             const users = await users.findAll();
//             return users;
//         } catch (error) {
//             throw new Error(`Cant get users: ${error.message}`);
//         }
//     }
// }
const createRole = async (roleData, user) => {
    const result = await Joi.validate(roleData, roleValidation);
    if (!result) {
        return result;
    }
    try {

        const roleAlreadyExist = await roles.findOne({
            where:{name:roleData.name}
        })

        if(roleAlreadyExist){
            throw new Error(`Role is already exists with id: ${roleAlreadyExist.id}`)
        }

        const newRole = await roles.create({
            id: roleData.id,
            name: roleData.name,
            description: roleData.description
        });
        const permissions = roleData.permissions;
        var rolesPermissions = [];
        for (var i = 0; i < permissions.length; i++) {
            var rolePermission = {
                role_id: newRole.id,
                permission_id: permissions[i]
            };
            rolesPermissions.push(rolePermission);
        }
        permissions_roles.bulkCreate(rolesPermissions, { returning: true })

        historyUsersActions.create({
            userId: user.id, action_name: "add_role",
            description: `added role ${newRole.id}` ,
            time: new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: "numeric",
                minute: "numeric"
            }), date: new Date()
        })

        return newRole;
    }
    catch (error) {
        throw new Error(`Cant Create role: ${error.message}`);
    }
}

const getRoleWithPermissions = async (roleId) => {
    if (!roleId) {
        try {
            const rolesData = await roles.findAll({
                // attributes: ['id', 'name'],
                include: [{ model: permissions, attributes: ['name'] }]
            });
            return rolesData;
        } catch (error) {
            throw new Error(`Cant get roles: ${error.message}`);
        }
    }
    else {
        try {
            const role = await roles.findByPk(roleId,
                {
                    attributes: ['name', 'description'],
                    include: { model: permissions, attributes: ['id', 'name'], through: { attributes: [] } }
                });
            return role;
        } catch (error) {
            throw new Error(`Cant get role: ${error.message}`);
        }
    }
}


// const getRoles = async () => {
//     try {
//         const rolesData = await roles.findAll({
//             attributes: ['id', 'name']
//         })
//         return rolesData;
//     } catch (error) {
//         throw new Error(`Cant get roles: ${error.message}`);
//     }
// }

const editRole = async (roleData, id, user) => {
    const result = await Joi.validate(roleData, roleValidation);
    if (!result) {
        return result;
    }
    try {
        const editRole = await roles.update({
            name: roleData.name,
            description: roleData.description
        },
            {
                returning: true, where: { id: id }
            });

        const permissions = roleData.permissions;
        permissions_roles.destroy({
            where: { role_Id: id }
        });
        var rolesPermissions = [];
        for (var i = 0; i < permissions.length; i++) {
            var rolePermission = {
                permission_id: permissions[i],
                role_id: id

            };
            rolesPermissions.push(rolePermission);
        }
        permissions_roles.bulkCreate(rolesPermissions, { returning: true })

        historyUsersActions.create({
            userId: user.id, action_name: "edit_role",
            description: `edited role ${id}` ,
            time: new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: "numeric",
                minute: "numeric"
            }), date: new Date()
        })


    }
    catch (error) {
        throw new Error(`Cant create role: ${error.message}`);
    }
}

const DeleteRole = async (id, user)=> {

    try{
        await roles.destroy({where:{id:id}})
    }catch(error){
        throw new Error(`can't delete role ${error.message}`)
    }

    historyUsersActions.create({
        userId: user.id, action_name: "delete_role",
        description: `deleted role ${id}` ,
        time: new Date().toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        }), date: new Date()
    })
}

const getRoles = async () => {
    try {
        const rolesData = await roles.findAll({
            //  attributes: ['id', 'name']
        })
        console.log(rolesData);
        return rolesData;
    } catch (error) {
        throw new Error(`Cant get roles: ${error.message}`);
    }
}

module.exports = {
    createRole,
    getRoleWithPermissions,
    editRole,
    getRoles,
    DeleteRole
};
