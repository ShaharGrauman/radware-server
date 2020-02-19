module.exports = (db, type) => {
    return db.define('external_references', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type :
        {
            type: type.ENUM('CveId', 'BugTraqId')
        
        },
        SignatureId: {
            type: type.INTEGER
        },
      
        
        reference: {
            type: type.STRING(2048),
        }
    }, { timestamps: false })
} 