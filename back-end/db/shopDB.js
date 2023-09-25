let mysql = require('mysql')

let shopDB = mysql.createConnection({
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'shop'
})

module.exports = shopDB