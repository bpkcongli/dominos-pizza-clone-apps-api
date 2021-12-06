const OrderPayloadSchema = require('./schema');
const BadRequestError = require('../../exceptions/BadRequestError');

const OrdersValidator = {
  validateOrderPayload: (payload) => {
    const validationResult = OrderPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new BadRequestError(validationResult.error.message);
    }
  },
};

module.exports = OrdersValidator;
