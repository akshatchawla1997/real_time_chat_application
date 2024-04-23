const mysql = require("mysql2")
require("dotenv").config()
// const {DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE} = require("../../env")
const pool = mysql.createPool({
    connectionLimit : process.env.CONNECTIONLIMIT,
    host: process.env.HOST,
    port:process.env.PORT,
    user:process.env.HOST.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    multipleStatements: process.env.MULTIPLESTATEMENT
})


module.exports = {
    pool    
}