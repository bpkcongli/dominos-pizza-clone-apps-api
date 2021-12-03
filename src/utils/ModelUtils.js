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
      sub_total: subtotal,
      tax_fee: taxFee,
      delivery_fee: deliveryFee,
      total,
    };
  },
};

module.exports = {
  nanoid,
  User,
  Cart,
};
