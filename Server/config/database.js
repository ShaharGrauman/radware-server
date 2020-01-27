const Sequelize = require('sequelize');

const sequelize=new Sequelize('mydb2',process.env.USERNAME,'1234',{
    host:'localhost',
    dialect:'mysql'
});

console.log(sequelize.config);
module.exports=sequelize;

