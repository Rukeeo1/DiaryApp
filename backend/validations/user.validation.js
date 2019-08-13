const Joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: Joi.string()
        .required()
        .min(1)
        .max(120),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(6)
        .max(20)
        .required(),
      isAdmin: Joi.boolean()
    }
  }
};
