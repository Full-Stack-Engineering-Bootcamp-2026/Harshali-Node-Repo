

const Sequelize=require('sequelize')
const sequelize=new Sequelize('node_complete','admin','Admin@123',
    {dialect:'mysql',host:'localhost'

    })
module.exports=sequelize