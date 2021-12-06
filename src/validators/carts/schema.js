const Joi = require('joi');

const CartPayloadSchema = Joi.object({
  items: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    details: Joi.object({
      size: Joi.alternatives().conditional('crust', {not: undefined, then: Joi.string().required()}),
      crust: Joi.alternatives().conditional('size', {not: undefined, then: Joi.string().required()}),
    }),
    qty: Joi.number().integer().strict().min(1).required(),
    price: Joi.number().integer().strict().required(),
  })).min(0).required(),
  subtotal: Joi.number().integer().strict().required(),
  taxFee: Joi.number().integer().strict().required(),
  deliveryFee: Joi.number().integer().strict().required(),
  total: Joi.number().integer().strict().required(),
});

module.exports = CartPayloadSchema;
