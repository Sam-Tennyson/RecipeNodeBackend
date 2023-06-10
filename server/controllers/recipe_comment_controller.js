// Create a comment

const { default: mongoose } = require("mongoose");
const { createErrorResponse } = require("../../helpers/responseHelpher");
const recipeCommentService = require("../../services/recipe_comment_services");
const recipeService = require("../../services/recipe_service");
const registerService = require("../../services/register_services");
const { RecipeModal } = require("../models/recipe_schema");
const { RegisterSchema } = require("../models/registration_schema");
const { RecipeCommentModal } = require("../models/recipe_comment_schema");

module.exports = {
    addRecipeComment: async (req, res)=> {

        try {
            const {text, user_id, recipe_id} = req.body
            
            if (!text || !user_id || !recipe_id) throw new Error("Missing Required field")

            const user_data = await RegisterSchema.findById(user_id)
            const recipe_data = await RecipeModal.findById(recipe_id)
            console.log(user_data, recipe_data)
            let data = {text, user_id, recipe_id}
            if (!user_data || !recipe_data) throw new Error('Recipe or user not found');

            const newData = await recipeCommentService.create(data)
            res.status(201).json({
                message: "Successfully Comment Added",
                newData
            })
        } catch (err) {
            res.status(500).json({
                error: err.message
            })
        }
    },

    getCommentForRecipe: async (req, res) => {
        try {
            const recipeId = req.params.id
            if (!recipeId) throw new Error('Missing Recipe id')

            const data = await RecipeCommentModal.find({'recipe_id': recipeId}).populate('user_id')
            res.status(200).json({
                message: "Success",
                data
            })            

        } catch (err) {
            res.status(500).json({
                error: err.message
            })
        }
    }
}