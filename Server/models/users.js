const sql = require("./db.js");
const mysql = require('mysql');

var User = function (user) {
    this.id = user.id;
    this.username = user.username;
    this.phone = user.phone;
    this.password = user.password;
    this.status = user.status;
};




User.getAll = () => {
    return new Promise((resolve, reject) => {
        sql.query("SELECT * FROM users", (err, res) => {
            if (err) {
                console.log("error: ", err);
                reject(err);
                return;
            }
    
            console.log("customers: ", res);
            resolve(res);
        });
    });
};




module.exports = User;