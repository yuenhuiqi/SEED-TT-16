const mysql = require('mysql');
require('dotenv').config();
console.log(process.env.HOSTNAME);

const connection = mysql.createConnection({
    host: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: 3306
});


module.exports = {
    connection
};