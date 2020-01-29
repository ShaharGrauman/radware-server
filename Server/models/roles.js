
module.exports = (db, type) => {
    return db.define('roles', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING(50)
        },
        description: {
            type: type.TEXT
        }
     },
     { timestamps: false, underscored: true }
)
} 
