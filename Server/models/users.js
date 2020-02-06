
module.exports = (db, type) => {
    return db.define('users', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING(50)
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
