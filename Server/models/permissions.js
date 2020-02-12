
module.exports = (db, type) => {
    return db.define('permissions', {
        id: {
            type: type.INTEGER(10),
            autoIncrement: true,
            primaryKey: true
        },
        SignatureId: {
            type: type.INTEGER
        },
        name: {
            type: type.STRING(50)
        }
     },
     { timestamps: false, underscored: true })
} 
