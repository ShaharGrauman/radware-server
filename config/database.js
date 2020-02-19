const Sequelize = require('sequelize');


<<<<<<< HEAD
const sequelize=new Sequelize('radware','root','Jannatnaa147',{
    host:'localhost',
=======
const sequelize=new Sequelize('heroku_82e8e5f108d916b','b9d57573ee14d5','3a5ec19f',{
    host:'us-cdbr-iron-east-04.cleardb.net',
>>>>>>> master
    dialect:'mysql'
});

console.log(sequelize.config);
module.exports=sequelize;
