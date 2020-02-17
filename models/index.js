const sequelize = require('sequelize');

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
const history_users_actions = require('./history_users_actions');

const Roles = require('./roles');
const Permissions = require('./permissions');
const Login = require('./login');

const externalReferences = external_references(db, sequelize);
const file = files(db, sequelize);
const param = parameter(db, sequelize);
const vulnDataExtra = vuln_data_extra(db, sequelize);
const webServer = web_server_Model(db, sequelize);
const attack = attackModel(db, sequelize);
const users = Users(db, sequelize);
const signatures = Signatures(db, sequelize);
const signatureStatusHistory = signature_status_history(db, sequelize);
const historyUsersActions = history_users_actions(db, sequelize);



const roles = Roles(db, sequelize);
const permissions = Permissions(db, sequelize);
const login = Login(db, sequelize);
const permissions_roles = db.define('permissions_roles', {},{timestamps: false});
const roles_users = db.define('roles_users', {},{timestamps: false});

// relationship many to many between roles and permissions tables
// The junction table that will keep track of the associations will be called permissions_roles, which will contain the foreign keys roleID and permissionID
roles.belongsToMany(permissions, {  through: permissions_roles, foreignKey: 'role_id' })
permissions.belongsToMany(roles, {  through: permissions_roles, foreignKey: 'permission_id' })

// relationship many to many between roles and users tables
roles.belongsToMany(users, {  through: roles_users, foreignKey: 'role_id' })
users.belongsToMany(roles, {  through: roles_users, foreignKey: 'user_id' })

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

users.hasMany(historyUsersActions);
historyUsersActions.belongsTo(users);

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

/// relationships one to many
users.hasMany(login)
login.belongsTo(users)


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
    roles_users,
    signatures,
    signatureStatusHistory,
    roles,
    permissions,
    permissions_roles,
    historyUsersActions,
    login
}