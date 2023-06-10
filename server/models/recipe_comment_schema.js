const mongoose = require('mongoose');

const RecipeCommentSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RegisterSchema",
        required: true
    },
    recipe_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RecipeSchema",
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
})

const RecipeCommentModal =  mongoose.model('RecipeCommentSchema', RecipeCommentSchema);

module.exports = {RecipeCommentModal}