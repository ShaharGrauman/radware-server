<<<<<<< HEAD
const sql = require("./db.js");

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
=======

module.exports = (db, type) => {
    return db.define('users', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: type.STRING(50)
        },
        phone: {
            type: type.STRING(15)
        },
        password: {
            type: type.STRING
        },
        status: {
            type: type.ENUM('active', 'locked', 'deleted')
        }
    }, { timestamps: false, underscored: true })
} 
>>>>>>> master
