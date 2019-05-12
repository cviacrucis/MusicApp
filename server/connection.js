const mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: "process.env.DBHOST",
    database: "process.env.DBNAME",
    password: "process.env.DBPASSWORD",
    port: "process.env.DBPORT",
    user: "process.env.DBUSER",
    
    
    
    

})

module.exports.pool = pool;