const Joi = require('joi');

const PizzaMenuPayloadSchema = Joi.object({
  name: Joi.string().required(),
  imageUrl: Joi.string().regex(/^https?:\/\//).required(),
  category: Joi.string().required(),
  ranges: Joi.string().required(),
  details: Joi.object({
    toppings: Joi.array().items(Joi.string()).min(1).required(),
    sizes: Joi.array().items(Joi.object({
      size: Joi.string().required(),
      sizeInInch: Joi.number().integer().strict().required(),
      totalSlice: Joi.number().integer().strict().required(),
      crusts: Joi.array().items(Joi.object({
        crust: Joi.string().required(),
        desc: Joi.string().required(),
        price: Joi.number().integer().strict().required(),
      })).min(1).required(),
    })).min(1).required(),
  }).required(),
});

const NonPizzaMenuPayloadSchema = Joi.object({
  name: Joi.string().required(),
  imageUrl: Joi.string().regex(/^https?:\/\//).required(),
  category: Joi.string().required(),
  ranges: Joi.string().required(),
  desc: Joi.string().required(),
  price: Joi.number().integer().strict().required(),
});

module.exports = {
  PizzaMenuPayloadSchema,
  NonPizzaMenuPayloadSchema,
};
