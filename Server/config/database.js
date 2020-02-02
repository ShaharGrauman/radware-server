const Sequelize = require('sequelize');

const sequelize=new Sequelize('radware','root','1234',{
    host:'localhost',
    dialect:'mysql'
});

console.log(sequelize.config);
module.exports=sequelize;

