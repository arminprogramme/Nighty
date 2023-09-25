const express = require('express');
const shopDB = require('../db/shopDB');
let basketRouters = express.Router()

basketRouters.post('/addToBasket', (req, res) => {
    let productItem = req.body
    let insertProductBasketQuery = `INSERT INTO basket VALUES (Null ,${productItem.productID},'${productItem.imgProduct}','${productItem.nameProduct}','${productItem.urlProduct}', ${productItem.mainPrice} ,${productItem.count},${productItem.totalPrice})`

    shopDB.query(insertProductBasketQuery, (err, result) => {
        if (err) {
            console.log('err to add product in basket', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


basketRouters.put('/plusChangeCount/:productID', (req, res) => {
    let productID = req.params.productID
    let productItem = req.body
    let updateCountPRductBasketQuery = `UPDATE basket SET count=  count + 1 ,totalPrice=mainPrice * count WHERE productID = ${productID}`

    shopDB.query(updateCountPRductBasketQuery, (err, result) => {
        if (err) {
            console.log('err to update count of product in basket', err);
        } else {
            res.send(JSON.stringify(result))
        }

    })
})
basketRouters.put('/minusChangeCount/:productID', (req, res) => {
    let productID = req.params.productID
    let productItem = req.body
    let updateCountPRductBasketQuery = `UPDATE basket SET count=  count - 1 ,totalPrice=mainPrice * count WHERE productID = ${productID}`

    shopDB.query(updateCountPRductBasketQuery, (err, result) => {
        if (err) {
            console.log('err to update count of product in basket', err);
        } else {
            res.send(JSON.stringify(result))
        }

    })
})

basketRouters.put('/changeCount/:productID', (req, res) => {
    let productID = req.params.productID
    let productItem = req.body
    let updateCountPRductBasketQuery = `UPDATE basket SET count=${productItem.count} + count ,totalPrice=mainPrice * count WHERE productID = ${productID}`

    shopDB.query(updateCountPRductBasketQuery, (err, result) => {
        if (err) {
            console.log('err to update count of product in basket', err);
        } else {
            res.send(JSON.stringify(result))
        }

    })
})


basketRouters.get('/getProduct', (req, res) => {
    let getProductBasket = `SELECT * FROM basket`

    shopDB.query(getProductBasket, (err, result) => {
        if (err) {
            console.log('err to get  product in basket', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})



basketRouters.delete('/deleteProduct/:productID', (req, res) => {
    let productID = req.params.productID
    let deletePRoductBasketQuery = `DELETE FROM basket WHERE productID = ${productID}`

    shopDB.query(deletePRoductBasketQuery, (err, result) => {
        if (err) {
            console.log('err to delete  product in basket', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


basketRouters.delete('/deleteAllProduct', (req, res) => {
    let productID = req.params.productID
    let deletePRoductBasketQuery = `DELETE FROM basket `

    shopDB.query(deletePRoductBasketQuery, (err, result) => {
        if (err) {
            console.log('err to delete  product in basket', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


module.exports = basketRouters