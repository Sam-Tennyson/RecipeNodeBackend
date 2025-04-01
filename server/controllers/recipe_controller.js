const { createErrorResponse } = require("../../helpers/responseHelpher");
const recipeService = require("../../services/recipe_service");
const commonFunctions = require("../../utils/commonFunctions");
const { MESSAGES, ERROR_TYPES } = require("../../utils/constants");
const { RecipeModal } = require("../models/recipe_schema");

module.exports = {
    addRecipe: async (req, res) =>  {
        
        try {
            let {authorization} = req.headers
            if (authorization && authorization.startsWith("Bearer ")) {
                let token = authorization.split(" ")[1] 
                let {userId} = commonFunctions.decryptJwt(token)
                let {title, description, ingredients, directions, image, category} = req.body
                let newData = {
                    title,
                    description,
                    userId,
                    ingredients,
                    directions,
                    image,
                    category,
                } 
                const createdCause = await recipeService.create(newData)
                res.status(201).json({
                    success: true,
                    createdCause
                })
                return;
            } else {
                console.log(">>>>>");
                throw createErrorResponse(MESSAGES.UNAUTHORIZED, ERROR_TYPES.UNAUTHORIZED);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                error: err.message,
            })
        }

    },
    getAllRecipeData: async (req, res) => {

        try {
            const limitValue = req.query.limit || 10
            const skipValue = req.query.skip || 0
            const {category} =req.body || []

            const filter = {}

            // category filter
            if (category.length > 0) {
                filter.category = {$in: category}
            }
            
            let {authorization} = req.headers
            if (authorization && authorization.startsWith("Bearer ")) {
                const token = authorization.split(" ")[1] 

                let {userId} = commonFunctions.decryptJwt(token)
                filter.userId = userId

                let [data, totalCount] = await Promise.all([
                    RecipeModal.find(filter).populate('userId').limit(limitValue).skip(skipValue),
                    RecipeModal.find(filter).count()
                ])

                res.status(200).json({
                    success: true,
                    data,
                    totalCount
                })
                return;
            } 
            
            let [data, totalCount] = await Promise.all([
                RecipeModal.find(filter).populate('userId').limit(limitValue).skip(skipValue),
                RecipeModal.find(filter).count()
            ])

            res.status(200).json({
                data:{
                    recipeData: data,
                    totalCount,
                },
            })

        } catch (error) {
            res.status(400).json({
                success: false,
                error: err.message,
            })
        }
    },
    getRecipeDataById: async (req, res)=> {
        try {
            const data = await Promise.all([
                RecipeModal.findById(req.params.id)
            ])
            res.json(data)
        } catch(err) {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        }
    },
    updateRecipeDataById: async (req, res)=> {
        try {
            let {authorization} = req.headers
            if(authorization && authorization.startsWith('Bearer ')){
                const token = authorization.split(" ")[1] 
                let {userId} = commonFunctions.decryptJwt(token)
                const [recipe_data] = await Promise.all([
                    RecipeModal.findById(req.params.id)
                ])
                let {title, description, ingredients, directions, image} = req.body

                if (recipe_data.userId.toString() == userId) {
                    const [data] = await Promise.all([
                        RecipeModal.findById(req.params.id)
                    ])
                    
                    data.title = title
                    data.description = description
                    data.ingredients = ingredients
                    data.directions = directions
                    data.image = image

                    const createdCause = await recipeService.create(data)
                    res.status(200).json({
                        success: true,
                        message: 'Data Updated successfully',
                        createdCause
                    })
                } 
                return;
            }             
            throw createErrorResponse(MESSAGES.UNAUTHORIZED, ERROR_TYPES.UNAUTHORIZED);
        } catch(err) {
            res.status(400).json({
                success: false,
                error: err.message,
            }); 
        }
    },
    
    deleteRecipeDataById: async (req, res)=> {
        try {
            let {authorization} = req.headers
            if(authorization && authorization.startsWith('Bearer ')){
                const token = authorization.split(" ")[1] 
                let {userId} = commonFunctions.decryptJwt(token)
                const [data] = await Promise.all([
                    RecipeModal.findById(req.params.id)
                ])
                console.log(userId, data) 
                if (!data) throw createErrorResponse(MESSAGES.NOT_FOUND, ERROR_TYPES.DATA_NOT_FOUND)
                if (data.userId.toString() == userId) {
                    await Promise.all([
                        RecipeModal.findByIdAndRemove(req.params.id)
                    ])
                    res.status(200).json({
                        success: true,
                        message: 'Data Deleted Successfully',
                    });
                } 
                return ;
            }            
            throw createErrorResponse(MESSAGES.UNAUTHORIZED, ERROR_TYPES.UNAUTHORIZED);
        } catch(err) {
            res.status(400).json({
                success: false,
                error: err.message,
            }); 
        }
    }
}