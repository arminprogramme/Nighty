const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

//Routes
let basketRoutes = require('./routes/basket.js')
let productRoutes = require('./routes/product.js')
let commentRoutes = require('./routes/comment.js')
let categoryRoutes = require('./routes/category.js')
let articleRoutes = require('./routes/article.js')
let favProductRoutes = require('./routes/favProduct.js')
let favArticleRoutes = require('./routes/favArticle.js')
let suggestionRouters = require('./routes/suggestion.js')
let buyRouters = require('./routes/buy.js')
let emailRouters = require('./routes/email.js')

let app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/email', emailRouters)
app.use('/api/buy', buyRouters)
app.use('/api/basket', basketRoutes)
app.use('/api/product', productRoutes)
app.use('/api/comment', commentRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/article', articleRoutes)
app.use('/api/favProduct', favProductRoutes)
app.use('/api/favArticle', favArticleRoutes)
app.use('/api/suggestion', suggestionRouters)

app.listen(3000)