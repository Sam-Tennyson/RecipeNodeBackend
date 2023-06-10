const { LoginSchema } = require("../server/models/registration_schema");

const loginService = {};

/**
* function to create.
*/
loginService.create = async (payload) => await new LoginSchema(payload).save();

/**
* function to insert.
*/
loginService.insertMany = async (payload) => await LoginSchema.insertMany(payload);

/**
* function to find.
*/
loginService.find = async (criteria, projection = {}) => await LoginSchema.find(criteria, projection).lean();

/**
* function to find one.
*/
loginService.findOne = async (criteria, projection = {}) => await LoginSchema.findOne(criteria, projection).lean();

/**
* function to update one.
*/
loginService.findOneAndUpdate = async (criteria, dataToUpdate, projection = {}) => await LoginSchema
  .findOneAndUpdate(criteria, dataToUpdate, projection).lean();

/**
* function to update Many.
*/
loginService.updateMany = async (criteria, dataToUpdate, projection = {}) => await LoginSchema
  .updateMany(criteria, dataToUpdate, projection).lean();

/**
* function to delete one.
*/
loginService.deleteOne = async (criteria) => await LoginSchema.deleteOne(criteria);

/**
* function to delete Many.
*/
loginService.deleteMany = async (criteria) => await LoginSchema.deleteMany(criteria);

/**
* function to apply aggregate on LoginSchema.
*/
loginService.aggregate = async (query) => await LoginSchema.aggregate(query);

/**
* function to fetch users with limit pagination.
*/
loginService.list = async (criteria, projection, options, sort) => await LoginSchema.find(criteria, projection).sort(sort)
  .skip(options.skip).limit(options.limit)
  .lean();

module.exports = loginService;