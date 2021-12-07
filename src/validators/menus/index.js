const {
  PizzaMenuPayloadSchema,
  NonPizzaMenuPayloadSchema,
} = require('./schema');
const BadRequestError = require('../../exceptions/BadRequestError');

const MenusValidator = {
  validateMenuPayload: (payload) => {
    const firstValidationResult = PizzaMenuPayloadSchema.validate(payload);

    if (firstValidationResult.error) {
      let errorMsg = firstValidationResult.error.message;
      const secondValidationResult = NonPizzaMenuPayloadSchema.validate(payload);

      if (!secondValidationResult.error) {
        return;
      }

      errorMsg = secondValidationResult.error.message;
      throw new BadRequestError(errorMsg);
    }
  },
};

module.exports = MenusValidator;
