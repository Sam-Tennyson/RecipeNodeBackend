const { RegisterSchema } = require("../server/models/registration_schema");

const registerService = {};

/**
* function to create.
*/
registerService.create = async (payload) => await new RegisterSchema(payload).save();

/**
* function to insert.
*/
registerService.insertMany = async (payload) => await RegisterSchema.insertMany(payload);

/**
* function to find.
*/
registerService.find = async (criteria, projection = {}) => await RegisterSchema.find(criteria, projection).lean();

/**
* function to find one.
*/
registerService.findOne = async (criteria, projection = {}) => await RegisterSchema.findOne(criteria, projection).lean();

/**
* function to update one.
*/
registerService.findOneAndUpdate = async (criteria, dataToUpdate, projection = {}) => await RegisterSchema
  .findOneAndUpdate(criteria, dataToUpdate, projection).lean();

/**
* function to update Many.
*/
registerService.updateMany = async (criteria, dataToUpdate, projection = {}) => await RegisterSchema
  .updateMany(criteria, dataToUpdate, projection).lean();

/**
* function to delete one.
*/
registerService.deleteOne = async (criteria) => await RegisterSchema.deleteOne(criteria);

/**
* function to delete Many.
*/
registerService.deleteMany = async (criteria) => await RegisterSchema.deleteMany(criteria);

/**
* function to apply aggregate on RegisterSchema.
*/
registerService.aggregate = async (query) => await RegisterSchema.aggregate(query);

/**
* function to fetch users with limit pagination.
*/
registerService.list = async (criteria, projection, options, sort) => await RegisterSchema.find(criteria, projection).sort(sort)
  .skip(options.skip).limit(options.limit)
  .lean();

module.exports = registerService;