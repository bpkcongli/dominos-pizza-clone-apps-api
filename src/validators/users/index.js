const {
  CreateUserPayloadSchema,
  UpdateUserPayloadSchema,
  UpdateUserPasswordPayloadSchema,
} = require('./schema');
const BadRequestError = require('../../exceptions/BadRequestError');

const UsersValidator = {
  validateCreateUserPayload: (payload) => {
    const validationResult = CreateUserPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new BadRequestError(validationResult.error.message);
    }
  },

  validateUpdateUserPayload: (payload) => {
    const validationResult = UpdateUserPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new BadRequestError(validationResult.error.message);
    }
  },

  validateUpdateUserPasswordPayload: (payload) => {
    const validationResult = UpdateUserPasswordPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new BadRequestError(validationResult.error.message);
    }
  },
};

module.exports = UsersValidator;
