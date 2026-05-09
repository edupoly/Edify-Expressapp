var joi = require("joi");

const validateLead = (data) => {
  var schema = joi.object({
    name: joi.string().min(3).max(5).required("name is must").messages({
      "string.empty": "name cannot be empty",
      "string.min": "name must be MIN of 3",
      "string.max": "name must be MAX of 5",
    }),
    phone: joi.number(),
    course: joi.string(),
    isOffline: joi
      .string()
      .valid("Offline", "Online")
      .required()
      .custom((value, helpers) => {
        return value === "Offline"; // Returns true if 'Offline', false if 'Online'
      }),
  });
  return schema.validate(data, { abortEarly: false });
};
module.exports = { validateLead };
