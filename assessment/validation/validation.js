const Joi = require('joi');

const dataValidation = Joi.object({
  value: Joi.number().required(),
  created_at: Joi.string().required(),
  patient_id: Joi.number().required(),
});

module.exports = {
  dataValidation,
};
