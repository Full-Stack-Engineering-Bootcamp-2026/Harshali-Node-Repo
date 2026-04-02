const mysql=require('mysql2')
const pool=mysql.createPool({
    host:'localhost',
    user: 'admin',
    password: 'Admin@123',
    database:'node_complete'
})
module.exports=pool.promise()