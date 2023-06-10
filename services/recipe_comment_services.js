const { RecipeCommentModal } = require("../server/models/recipe_comment_schema");

let recipeCommentService = {}

/**
 * Function to create a recipe
 */

recipeCommentService.create = async (payload) => await new RecipeCommentModal(payload).save();

/**
 * Function to update a recipe
 */

recipeCommentService.findOneAndUpdate = async (criteria, dataToUpdate, projection={}) => await new RecipeCommentModal(criteria, dataToUpdate, projection).lean();

/**
* Function to find one.
*/
recipeCommentService.findOne = async (criteria, projection = {}) => await RecipeCommentModal.findOne(criteria, projection).lean();

/**
* Function to delete Many.
*/
recipeCommentService.deleteMany = async (criteria) => await RecipeCommentModal.deleteMany(criteria);

/**
 * Function to delete a recipe
 */
recipeCommentService.deleteOne = async (criteria) => await RecipeCommentModal.deleteOne(criteria)

/**
* function to apply aggregate on RegisterSchema.
*/
recipeCommentService.aggregate = async (query) => await RecipeCommentModal.aggregate(query);


module.exports = recipeCommentService;