const { RecipeModal } = require("../server/models/recipe_schema")

let recipeService = {}

/**
 * Function to create a recipe
 */

recipeService.create = async (payload) => await new RecipeModal(payload).save();

/**
 * Function to update a recipe
 */

recipeService.findOneAndUpdate = async (criteria, dataToUpdate, projection={}) => await new RecipeModal(criteria, dataToUpdate, projection).lean();

/**
* Function to find one.
*/
recipeService.findOne = async (criteria, projection = {}) => await RecipeModal.findOne(criteria, projection).lean();

/**
* Function to delete Many.
*/
recipeService.deleteMany = async (criteria) => await RecipeModal.deleteMany(criteria);

/**
 * Function to delete a recipe
 */
recipeService.deleteOne = async (criteria) => await RecipeModal.deleteOne(criteria)


/**
* function to apply aggregate on RegisterSchema.
*/
recipeService.aggregate = async (query) => await RecipeModal.aggregate(query);

module.exports = recipeService;