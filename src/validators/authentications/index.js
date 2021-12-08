const BadRequestError = require('../../exceptions/BadRequestError');
const {
  UserCredentialPayloadSchema,
  RefreshTokenPayloadSchema,
} = require('./schema');

const AuthenticationsValidator = {
  validateUserCredentialPayload: (payload) => {
    const validationResult = UserCredentialPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new BadRequestError(validationResult.error.message);
    }
  },

  validateRefreshTokenPayload: (payload) => {
    const validationResult = RefreshTokenPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new BadRequestError(validationResult.error.message);
    }
  },
};

module.exports = AuthenticationsValidator;
