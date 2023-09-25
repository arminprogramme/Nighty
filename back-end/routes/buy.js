const express = require('express');
const shopDB = require('../db/shopDB');
let buyRouters = express.Router()

buyRouters.get('/getProduct', (req, res) => {
    let getProductQuery = 'SELECT * FROM buyproduct'

    shopDB.query(getProductQuery, (err, result) => {
        if (err) {
            console.log('err to get buy products', err);
        } else {
            res.send(result)
        }
    })
})

buyRouters.post('/sendProduct', (req, res) => {
    let productItem = req.body
    let insertProductBuyQuery = `INSERT INTO buyproduct(id, nameProduct, mainPrice, img, description, count, totalPrice) VALUES ?`

    shopDB.query(insertProductBuyQuery, [productItem], (err, result) => {
        if (err) {
            console.log('err to get buy products', err);
        } else {
            res.send(result)
        }
    })
})

module.exports = buyRouters