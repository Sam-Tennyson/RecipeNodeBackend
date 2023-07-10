const express = require('express');
const { addCategory, getCategory } = require('../controllers/category_controller');
const CategoryRouter = express.Router()

CategoryRouter.post('/add', addCategory)
CategoryRouter.get('/fetch', getCategory)

module.exports = CategoryRouter