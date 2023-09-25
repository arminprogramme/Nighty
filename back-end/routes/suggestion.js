const express = require('express');
const shopDB = require('../db/shopDB');
let suggestionRouters = express.Router()

suggestionRouters.get('/getSubSuggestion', (req, res) => {
    let getSuggestQuery = `SELECT * FROM product WHERE type = "پیشنهادات فرعی"`

    shopDB.query(getSuggestQuery, (err, result) => {
        if (err) {
            console.log('err to get suggest product', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


suggestionRouters.get('/getSugArticle', (req, res) => {
    let getArticleSuggestQuery = `SELECT * FROM article WHERE id > 0 AND id <19`

    shopDB.query(getArticleSuggestQuery, (err, result) => {
        if (err) {
            console.log('err to get suggest article', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

module.exports = suggestionRouters