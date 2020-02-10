const Sequelize = require('sequelize');

const sequelize=new Sequelize('radware','root','Janatnaa147',{
    host:'localhost',
    dialect:'mysql'
});

console.log(sequelize.config);
module.exports=sequelize;

