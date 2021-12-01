const Joi = require('joi');

const UserPayloadSchema = Joi.object({
  firstName: Joi.string().min(1).required(),
  lastName: Joi.string().required(),
  email: Joi.string().email({tlds: true}).required(),
  dateOfBirth: Joi.date().greater('1-1-1900').less('now').required(),
  contact: Joi.object({
    type: Joi.string().pattern(/^(Mobile|Home|Office)$/).required(),
    number: Joi.string().pattern(/^([0-9]+-[0-9]+|[0-9]+)$/).required(),
  }).required(),
  addresses: Joi.array().items(
      Joi.object({
        type: Joi.string().pattern(/^(Home|Office|Other)$/).required(),
        detail: Joi.string().required(),
        district: Joi.string().required(),
        city: Joi.string().required(),
        province: Joi.string().required(),
      }),
  ).min(0).required(),
});

const CreateUserPayloadSchema = UserPayloadSchema.concat(Joi.object({
  password: Joi.string().min(8).required(),
}));

const UpdateUserPayloadSchema = UserPayloadSchema;

const UpdateUserPasswordPayloadSchema = Joi.object({
  currentPassword: Joi.string().min(8).required(),
  newPassword: Joi.string().min(8).required(),
});

module.exports = {
  CreateUserPayloadSchema,
  UpdateUserPayloadSchema,
  UpdateUserPasswordPayloadSchema,
};
