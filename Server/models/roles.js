module.exports= (dataBase,type) =>{
    return dataBase.define('roles',{
        id:{
            type:type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },name:{
            type:type.STRING(50),
            allowNull:false
        },description:{
            type:type.STRING(255),
            defaultValue:null
        }
    }, { timestamps: false, underscored: true });
}