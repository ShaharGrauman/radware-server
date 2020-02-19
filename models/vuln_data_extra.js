
module.exports = (db, type) => {
    return db.define('vuln_data_extra', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: type.TEXT,
        }
    },{timestamps: false})
} 