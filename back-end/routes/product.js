const express = require('express');
const shopDB = require('../db/shopDB');
let productRouters = express.Router()



productRouters.get('/getSaleProduct', (req, res) => {
    let getAllProductQuery = `SELECT * FROM product WHERE type = "پرفروش ترین ها";`
    shopDB.query(getAllProductQuery, (err, result) => {
        if (err) {
            console.log('cannot get sale product from products', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


productRouters.get('/getRecentProduct', (req, res) => {
    let getAllProductQuery = `SELECT * FROM product WHERE type = "تازه ها";`
    shopDB.query(getAllProductQuery, (err, result) => {
        if (err) {
            console.log('cannot get recent product from products', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


productRouters.get('/getSpecialProduct', (req, res) => {
    let getAllProductQuery = `SELECT * FROM product WHERE type = "ویژه";`
    shopDB.query(getAllProductQuery, (err, result) => {
        if (err) {
            console.log('cannot get special product from products', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


productRouters.get('/getRatedProduct', (req, res) => {
    let getAllProductQuery = `SELECT * FROM product WHERE type = 'رتبه دار'`
    shopDB.query(getAllProductQuery, (err, result) => {
        if (err) {
            console.log('cannot get rated product from products', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


productRouters.get('/getSuggestionProduct', (req, res) => {
    let getAllProductQuery = `SELECT * FROM product WHERE type = 'پیشنهادات';`
    shopDB.query(getAllProductQuery, (err, result) => {
        if (err) {
            console.log('cannot get suggest product from products', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

productRouters.get('/getReviewProduct', (req, res) => {
    let getAllProductQuery = `SELECT * FROM product WHERE type = 'آخرین بررسی ها';`
    shopDB.query(getAllProductQuery, (err, result) => {
        if (err) {
            console.log('cannot get review product from products', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

productRouters.get('/:url', (req, res) => {
    let productURL = req.params.url
    let getDetailProductQuery = `SELECT * FROM product WHERE url = '${productURL}'`

    shopDB.query(getDetailProductQuery, (err, result) => {
        if (err) {
            console.log('cannot get detail product from products', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


productRouters.get('/getListProduct/:categoryID', (req, res) => {
    let categoryID = req.params.categoryID
    let getListProductQuery = `SELECT * FROM product WHERE categoryID = ${categoryID}`


    shopDB.query(getListProductQuery, (err, result) => {
        if (err) {
            console.log('cannot get list product from products', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

productRouters.get('/getProductByName/:nameProduct', (req, res) => {
    let productName = req.params.nameProduct
    let getProductByNameQuery = `SELECT * FROM product WHERE name = '${productName}'`

    shopDB.query(getProductByNameQuery, (err, result) => {
        if (err) {
            console.log('cannot get name product from products', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = productRouters