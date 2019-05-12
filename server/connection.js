const mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    database: process.env.DBNAME,
    port: process.env.DBPORT,
    password: process.env.DBPASSWORD,
    host: process.env.DBHOST,
    user: process.env.DBUSER

})

module.exports.pool = pool;