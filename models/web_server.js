
module.exports = (db, type) => {
    return db.define('web_server', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        SignatureId: {
            type: type.INTEGER
        },
     
        web: {
            type: type.STRING(2045),
        }
    },{timestamps: false})
} 