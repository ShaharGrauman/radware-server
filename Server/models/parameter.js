
module.exports = (db, type) => {
    return db.define('parameter', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        SignatureId: {
            type: type.INTEGER
        },
        parameter: {
            type: type.STRING,
        }
    },{timestamps: false})
} 