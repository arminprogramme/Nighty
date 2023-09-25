const express = require('express');
const shopDB = require('../db/shopDB');
let favProductRouters = express.Router()

favProductRouters.post('/addToFavProduct', (req, res) => {
    let productItem = req.body
    let addToFavProduct = `INSERT INTO favproduct VALUES (null,'${productItem.nameProduct}',${productItem.price},'${productItem.imgSecond}','${productItem.description}','${productItem.url}')`

    shopDB.query(addToFavProduct, (err, result) => {
        if (err) {
            console.log('err to add fav product', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

favProductRouters.get('/getFavProduct', (req, res) => {
    let getFavProduct = `SELECT * FROM favproduct`
    shopDB.query(getFavProduct, (err, result) => {
        if (err) {
            console.log('err to get fav product', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})




favProductRouters.delete('/deleteProduct/:productID', (req, res) => {
    let productID = req.params.productID
    let deleteProductFavQuery = `DELETE  FROM favproduct WHERE id = ${productID}`

    shopDB.query(deleteProductFavQuery, (err, result) => {
        if (err) {
            console.log('err to delete sp fav product', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })

})

module.exports = favProductRouters