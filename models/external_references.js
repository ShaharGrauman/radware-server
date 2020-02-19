module.exports = (db, type) => {
    return db.define('external_references', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
<<<<<<< HEAD
        type :
=======
        type:
>>>>>>> master
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