module.exports = (db, type) => {
    return db.define('files', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        signatureId: {
            type: type.INTEGER,
        },
        file: {
            type: type.STRING,
        }
    }, { timestamps: false })
} 