const  mongoose  = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RegisterSchema"
    },
    ingredients: {
        type: String,
        // required: true
    },
    directions: {
        type: String,
        // required: true
    },
    image: {
        type: String,
        // required: true
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

const RecipeModal=  mongoose.model('RecipeSchema', RecipeSchema)

module.exports = {RecipeModal}