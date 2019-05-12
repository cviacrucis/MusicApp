const mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: "process.env.DBHOST",
    user: "process.env.DBUSER",
    password: "process.env.DBPASSWORD",
    database: "process.env.DBNAME",
    port: "process.env.DBPORT",
    

})

module.exports.pool = pool;