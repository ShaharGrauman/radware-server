

module.exports = (db, type) => {
    return db.define('signature_status_history', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        status: {
            type: type.ENUM('in_progress', 'in_test', 'in_qa', 'published', 'deleted')
        },
        time: {
            type: type.TIME        },
        date: {
            type: type.DATE
        }
    }, { timestamps: false, underscored: true })
} 