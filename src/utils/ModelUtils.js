const {customAlphabet} = require('nanoid');
const nanoid = customAlphabet('0123456789abcdef', 8);

const User = {
  mappingToDB({
    userId,
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    contact,
    addresses,
    cart,
    createdAt,
    lastUpdated,
  }) {
    return {
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      date_of_birth: dateOfBirth,
      contact,
      addresses,
      cart,
      created_at: createdAt,
      last_updated: lastUpdated,
    };
  },

  mappingToModel({
    user_id,
    first_name,
    last_name,
    email,
    date_of_birth,
    contact,
    addresses,
    created_at,
    last_updated,
  }) {
    return {
      userId: user_id,
      firstName: first_name,
      lastName: last_name,
      email,
      dateOfBirth: date_of_birth,
      contact,
      addresses,
      createdAt: created_at,
      lastUpdated: last_updated,
    };
  },
};

const Cart = {
  mappingToDB({
    items,
    subtotal,
    taxFee,
    deliveryFee,
    total,
  }) {
    return {
      items,
      subtotal,
      tax_fee: taxFee,
      delivery_fee: deliveryFee,
      total,
    };
  },

  mappingToModel({
    items,
    subtotal,
    tax_fee,
    delivery_fee,
    total,
  }) {
    return {
      items,
      subtotal,
      taxFee: tax_fee,
      deliveryFee: delivery_fee,
      total,
    };
  },
};

const Order = {
  mappingToDB({
    orderId,
    orderTime,
    userId,
    items,
    subtotal,
    taxFee,
    deliveryFee,
    total,
    customerInfo,
    deliveryAddress,
    orderNow,
    orderLaterAfter,
    paymentMethod,
  }) {
    const {firstName: first_name, lastName: last_name, ...customer_info} = customerInfo;
    return {
      order_id: orderId,
      order_time, orderTime,
      user_id: userId,
      items,
      subtotal,
      tax_fee: taxFee,
      delivery_fee: deliveryFee,
      total,
      customer_info: {
        first_name,
        last_name,
        ...customer_info,
      },
      delivery_address: deliveryAddress,
      order_now: orderNow,
      order_later_after: orderLaterAfter,
      payment_method: paymentMethod,
    };
  },

  mappingToModel() {},
};

module.exports = {
  nanoid,
  User,
  Cart,
  Order,
};
