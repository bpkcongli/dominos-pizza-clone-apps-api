const Joi = require('joi');

const CartPayloadSchema = Joi.object({
  items: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    details: Joi.object({
      size: Joi.string(),
      crust: Joi.string(),
    }),
    qty: Joi.number().integer().min(1).required(),
    price: Joi.number().integer().required(),
  })).min(0).required(),
  subtotal: Joi.number().integer().required(),
  taxFee: Joi.number().integer().required(),
  deliveryFee: Joi.number().integer().required(),
  total: Joi.number().integer().required(),
});

module.exports = CartPayloadSchema;
