
module.exports = (db, type) => {
    return db.define('web_server', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
     
        web: {
            type: type.STRING(2045),
        }
    },{timestamps: false})
} 