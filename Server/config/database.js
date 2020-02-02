const Sequelize = require('sequelize');

<<<<<<< HEAD
const sequelize=new Sequelize('radware','root','1234',{
=======
const sequelize=new Sequelize('radware','root','eyas1994',{
>>>>>>> master
    host:'localhost',
    dialect:'mysql'
});

console.log(sequelize.config);
module.exports=sequelize;

