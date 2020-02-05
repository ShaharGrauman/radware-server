const Sequelize = require('sequelize');

const sequelize=new Sequelize('radware','root','Xapple10',{
    host:'localhost',
    dialect:'mysql'
});

console.log(sequelize.config);
module.exports=sequelize;

