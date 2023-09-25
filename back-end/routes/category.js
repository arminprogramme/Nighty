const express = require('express');
const shopDB = require('../db/shopDB');
let categoryRouters = express.Router()

categoryRouters.get('/getMainCategory', (req, res) => {
    let getCategoryMainQuery = `SELECT * FROM category WHERE type = "main-page"`
    shopDB.query(getCategoryMainQuery, (err, result) => {
        if (err) {
            console.log('err to get main category', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

categoryRouters.get('/getAllCategory', (req, res) => {
    let getCategoryQuery = `SELECT * FROM category `
    shopDB.query(getCategoryQuery, (err, result) => {
        if (err) {
            console.log('err to get all category', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

module.exports = categoryRouters