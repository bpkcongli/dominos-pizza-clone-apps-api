const CartPayloadSchema = require('./schema');
const BadRequestError = require('../../exceptions/BadRequestError');

const CartsValidator = {
  validateCartPayload: (payload) => {
    const validationResult = CartPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new BadRequestError(validationResult.error.message);
    }
  },
};

module.exports = CartsValidator;
