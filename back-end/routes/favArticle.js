const express = require('express');
const shopDB = require('../db/shopDB');
let favArticleRouters = express.Router()


favArticleRouters.post('/addToFavArticle', (req, res) => {
    let articleItem = req.body
    let addArticleFav = `INSERT INTO favarticle VALUES (null,'${articleItem.categoryArticle}','${articleItem.img}','${articleItem.title}', '${articleItem.urlArticle}');
    `

    shopDB.query(addArticleFav, (err, result) => {
        if (err) {
            console.log('err to add fav article', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })

})


favArticleRouters.get('/getAllArticle', (req, res) => {
    let getAllFavArticle = `SELECT * FROM favarticle`

    shopDB.query(getAllFavArticle, (err, result) => {
        if (err) {
            console.log('err to get fav article', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


favArticleRouters.delete('/deleteArticle/:articleID', (req, res) => {
    let articleID = req.params.articleID
    let deleteArticleID = `DELETE FROM favarticle WHERE id = ${articleID}`

    shopDB.query(deleteArticleID, (err, result) => {
        if (err) {
            console.log('err to delete fav article', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


favArticleRouters.delete('/deleteArticle/:articleID', (req, res) => {
    let articleID = req.params.articleID
    let deleteArticleFavQuery = `DELETE  FROM favarticle WHERE id = ${articleID}`

    shopDB.query(deleteArticleFavQuery, (err, result) => {
        if (err) {
            console.log('err to delete sp fav article', err);
        } else {
            res.send(JSON.stringify(result))
        }
    })

})

module.exports = favArticleRouters