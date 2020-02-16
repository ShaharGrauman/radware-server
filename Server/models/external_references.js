module.exports = (db, type) => {
    return db.define('external_references', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        SignatureId: {
            type: type.INTEGER
        },
        type:
        {
            type: type.ENUM('CveId', 'BugTraqId')
        
        },
        
        reference: {
            type: type.STRING(2048),
        }
    }, { timestamps: false })
} 