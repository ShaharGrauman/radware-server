const sql = require("./db.js");

var Admin = admin => {
    this.id = admin.id;
    this.username = admin.username;
    this.phone = admin.phone;
    this.password = admin.password;
    this.status = admin.status;
};

Admin.getAllRoles = () => {
    return new Promise((resolve, reject) => {
        sql.query("SELECT r.id, r.name as `Role name`, p.name as `Permissions` FROM roles r join permissions p join permissions_roles pr on r.id = pr.role_id and p.id = pr.permission_id", (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
                return;
            }

            resolve(res);
        });
    });
};


module.exports = Admin;