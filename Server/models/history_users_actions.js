
module.exports = (db, type) => {
    return db.define('history_users_actions', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        user_id: {
            type: type.INTEGER
        },
        action_name: {
            type: type.ENUM('in_progress', 'in_test', 'in_qa', 'published', 'deleted')
        },
        system_name: {
            type: type.ENUM('in_progress', 'in_test', 'in_qa', 'published', 'deleted')
        },
        screen_name: {
            type: type.ENUM('in_progress', 'in_test', 'in_qa', 'published', 'deleted')
        },
        // description: {

        // },
        time: {
            type: type.TIME      
        },
        date: {
            type: type.DATE
        }
    }, { timestamps: false, underscored: true })
} 