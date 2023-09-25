const express = require('express');
const shopDB = require('../db/shopDB');
let articleRouters = express.Router()

articleRouters.get('/technologyArticle', (req, res) => {
    let getTechArticleQuery = `SELECT * FROM article WHERE category = 'تکنولوژی'`

    shopDB.query(getTechArticleQuery, (err, result) => {
        if (err) {
            console.log('err to get technology article', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

articleRouters.get('/getAllArticle', (req, res) => {
    let getArticleQuery = `SELECT * FROM article`

    shopDB.query(getArticleQuery, (err, result) => {
        if (err) {
            console.log('err to get article', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


articleRouters.get('/getDetailProduct/:articleURL', (req, res) => {
    let articleUrl = req.params.articleURL
    let getDetailArticleQuery = `SELECT * FROM article WHERE urlArticle='${articleUrl}'`

    shopDB.query(getDetailArticleQuery, (err, result) => {
        if (err) {
            console.log('err to get detail article', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
articleRouters.get('/getCategoryArticle/:category', (req, res) => {
    let categoryArticle = req.params.category
    let getAllFavArticle = `SELECT * FROM article WHERE category = '${categoryArticle}'`

    shopDB.query(getAllFavArticle, (err, result) => {
        if (err) {
            console.log('err to get  category article', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = articleRouters