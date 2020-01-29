const Sequelize = require('sequelize');
const db = require("../config/database");
const attackModel = require('./attack');
const web_server_Model = require('./web_server');
const vuln_data_extra = require('./vuln_data_extra');
const parameter = require('./parameter');
const files = require('./files');
const external_references = require('./external_references');
const Users = require('./users');
const Signatures = require('./signatures');
const signature_status_history = require('./signature_status_history');
const Roles = require('./roles');
const Permissions = require('./permissions');
// const Permissions_roles = require('./permissions_roles');

const externalReferences = external_references(db, Sequelize);
const file = files(db, Sequelize);
const param = parameter(db, Sequelize);
const vulnDataExtra = vuln_data_extra(db, Sequelize);
const webServer = web_server_Model(db, Sequelize);
const attack = attackModel(db, Sequelize);
const users = Users(db, Sequelize);
const signatures = Signatures(db, Sequelize);
const signatureStatusHistory = signature_status_history(db, Sequelize);
const roles = Roles(db, Sequelize);
const permissions = Permissions(db, Sequelize);
const permissions_roles = db.define('permissions_roles', {},{timestamps: false});

// relationship many to many between roles and permissions tables
// The junction table that will keep track of the associations will be called permissions_roles, which will contain the foreign keys roleID and permissionID
roles.belongsToMany(permissions, {  through: permissions_roles, foreignKey: 'role_id' })
permissions.belongsToMany(roles, {  through: permissions_roles, foreignKey: 'permission_id' })


/// relationship attackId to Signature table (add column attack_id in signatures table )
attack.hasMany(signatures);
signatures.belongsTo(attack);

/// relationship userID to Signature table (add column user_id(created_By) in signatures table )
users.hasMany(signatures);
signatures.belongsTo(users);

/// relationship signatureId to signatureStatusHistory table (add column signature_Id) in signatureStatusHistory
signatures.hasMany(signatureStatusHistory);
signatureStatusHistory.belongsTo(signatures);

/// relationship userId to signatureStatusHistory table (add column user_Id) in signatureStatusHistory
users.hasMany(signatureStatusHistory);
signatureStatusHistory.belongsTo(users);

/// relationships one to many
signatures.hasMany(webServer);
webServer.belongsTo(signatures);

signatures.hasMany(externalReferences);
externalReferences.belongsTo(signatures);

signatures.hasMany(param);
param.belongsTo(signatures);

signatures.hasMany(vulnDataExtra);
vulnDataExtra.belongsTo(signatures);

signatures.hasMany(file);
file.belongsTo(signatures);


db.sync({ force: false }).then(() => {
    console.log('created');

});



module.exports = {
    attack,
    webServer,
    vulnDataExtra,
    param,
    file,
    externalReferences,
    users,
    signatures,
    signatureStatusHistory,
    roles,
    permissions,
    permissions_roles
}