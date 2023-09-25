const express = require('express');
const shopDB = require('../db/shopDB');
let emailRouters = express.Router()

emailRouters.get('/getEmail', (req, res) => {
    let getEmailQuery = `SELECT * FROM email`
    shopDB.query(getEmailQuery, (err, result) => {
        if (err) {
            console.log('err to get email', err);
        } else {
            res.send(JSON.stringify(result))
        }

    })
})

emailRouters.post('/setEmail', (req, res) => {
    let body = req.body
    let insertEmailQuery = `INSERT INTO email VALUES(null ,'${body.email}')`
    shopDB.query(insertEmailQuery, (err, result) => {
        if (err) {
            console.log('err to set email', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
    console.log(req.body.email);
})


module.exports = emailRouters