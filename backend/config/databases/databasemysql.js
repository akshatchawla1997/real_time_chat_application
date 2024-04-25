const mysql = require("mysql2")
require("dotenv").config()
// const {DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE} = require("../../env")
const pool = mysql.createPool({
    connectionLimit : 10,
    host: "database-1.c184aoeakr4k.ap-south-1.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"lnvdyKUXJgIA3u7LoY0r",
    database:"chatapp",
    multipleStatements: true

    // connectionLimit : process.env.CONNECTIONLIMIT,
    // host: process.env.HOST,
    // port:process.env.PORT,
    // user:process.env.USER,
    // password:process.env.PASSWORD,
    // database:process.env.DATABASE,
    // multipleStatements: process.env.MULTIPLESTATEMENT
})


module.exports = {
    pool    
}