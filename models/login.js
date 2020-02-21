
module.exports = (db, type) => {
    return db.define('login', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        user_id:{
            type: type.INTEGER,
        },
        time:{
            type: type.TIME
        },
        date:{
            type: type.DATE
        },
        failed:{
            type: type.TINYINT
        }
    },{timestamps: false, underscored: true, freezeTableName: true})
} 