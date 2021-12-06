const Joi = require('joi');

const OrderPayloadSchema = Joi.object({
  userId: Joi.string().required(),
  items: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    details: Joi.object({
      size: Joi.alternatives().conditional('crust', {not: undefined, then: Joi.string().required()}),
      crust: Joi.alternatives().conditional('size', {not: undefined, then: Joi.string().required()}),
    }),
    qty: Joi.number().integer().strict().min(1).required(),
    price: Joi.number().integer().strict().required(),
  })).min(1).required(),
  subtotal: Joi.number().integer().strict().required(),
  taxFee: Joi.number().integer().strict().required(),
  deliveryFee: Joi.number().integer().strict().required(),
  total: Joi.number().integer().strict().required(),
  customerInfo: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email({tlds: true}).required(),
    contact: Joi.object({
      type: Joi.string().regex(/^(Mobile|Home|Office)$/).required(),
      number: Joi.string().regex(/^([0-9]+-[0-9]+|[0-9]+)$/).required(),
    }).required(),
  }).required(),
  deliveryAddress: Joi.object({
    type: Joi.string().regex(/^(Home|Office|Other)$/).required(),
    detail: Joi.string().required(),
    district: Joi.string().required(),
    city: Joi.string().required(),
    province: Joi.string().required(),
  }).required(),
  orderNow: Joi.bool().strict().required(),
  orderLaterAfter: Joi.alternatives().conditional('orderNow', {is: false, then: Joi.number().integer().strict().greater(0), otherwise: Joi.number().integer().strict().valid(0)}).required(),
  paymentMethod: Joi.string().required(),
});

module.exports = OrderPayloadSchema;
