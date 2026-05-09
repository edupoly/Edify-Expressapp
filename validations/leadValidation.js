const Joi = require("joi");

const leadValidationSchema = Joi.object({
  name: Joi.string().min(3).max(5),
  phone: Joi.number().min(10000).max(9999999999),
  course: String,
  timeStamp: Date,
  isOffline: Boolean,
});

module.exports = leadValidationSchema;
