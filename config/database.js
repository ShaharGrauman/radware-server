const Sequelize = require('sequelize');

const sequelize=new Sequelize('heroku_82e8e5f108d916b','b9d57573ee14d5','3a5ec19f',{
    host:'us-cdbr-iron-east-04.cleardb.net',
    dialect:'mysql'
});

// const sequelize=new Sequelize('radware','root','eyas1994',{
//         host:'localhost',
//         dialect:'mysql'
//     });

console.log(sequelize.config);
module.exports=sequelize;
