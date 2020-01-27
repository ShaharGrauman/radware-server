
module.exports = (db, type) => {
    return db.define('attacks', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING,
        }
    }, { timestamps: false, underscored: true })
} 