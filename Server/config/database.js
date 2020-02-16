const Sequelize = require('sequelize');

const sequelize=new Sequelize('radware','root','root',{
    host:'localhost',
    dialect:'mysql'
});

console.log(sequelize.config);
module.exports=sequelize;

