const Sequelize = require('sequelize');

const sequelize=new Sequelize('mydb2','root','a23cg657fef521ej',{
    host:'localhost',
    dialect:'mysql'
});

console.log(sequelize.config);
module.exports=sequelize;

