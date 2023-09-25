const express = require('express');
const shopDB = require('../db/shopDB');
let commentRouters = express.Router()

commentRouters.get('/getProductComment', (req, res) => {
    let getProductCommentQuery = 'SELECT * FROM `comment` WHERE type = "محصول"'

    shopDB.query(getProductCommentQuery, (err, result) => {
        if (err) {
            console.log('err to get product comment', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


commentRouters.get('/getAllComment', (req, res) => {
    let getAllCommentQuery = 'SELECT * FROM `comment` '

    shopDB.query(getAllCommentQuery, (err, result) => {
        if (err) {
            console.log('err to get all comment', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

module.exports = commentRouters