const Sequelize = require('sequelize');

const sequelize=new Sequelize('radware','root','Jannatnaa147',{
    host:'localhost',
    dialect:'mysql'
});

console.log(sequelize.config);
module.exports=sequelize;

