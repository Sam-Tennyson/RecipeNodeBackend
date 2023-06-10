const express = require("express");
const { addRecipe, getAllRecipeData, getRecipeDataById, deleteRecipeDataById, updateRecipeDataById } = require("../controllers/recipe_controller");

const recipe_app_router = express.Router()
recipe_app_router.post("/add-recipe", addRecipe)
recipe_app_router.get("/get-recipe", getAllRecipeData)
recipe_app_router.delete("/get-recipe/:id", deleteRecipeDataById)
recipe_app_router.get("/get-recipe/:id", getRecipeDataById)
recipe_app_router.put("/update-recipe/:id", updateRecipeDataById)

module.exports = recipe_app_router