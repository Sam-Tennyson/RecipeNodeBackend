const express = require('express');
const { addRecipeComment, getCommentForRecipe } = require('../controllers/recipe_comment_controller');

const recipe_comment_router = express.Router()
recipe_comment_router.post('/make-comment', addRecipeComment)
recipe_comment_router.get('/make-comment/:id', getCommentForRecipe)

module.exports = recipe_comment_router
