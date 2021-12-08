const Joi = require('joi');

const UserCredentialPayloadSchema = Joi.object({
  email: Joi.string().email({tlds: true}).required(),
  password: Joi.string().min(8).required(),
});

const RefreshTokenPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = {
  UserCredentialPayloadSchema,
  RefreshTokenPayloadSchema,
};
