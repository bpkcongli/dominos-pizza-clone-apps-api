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
      order_time: orderTime,
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

  mappingToModel({
    order_id,
    order_time,
    items,
    subtotal,
    tax_fee,
    delivery_fee,
    total,
    customer_info,
    delivery_address,
    order_now,
    order_later_after,
    payment_method,
  }) {
    const {first_name: firstName, last_name: lastName, ...customerInfo} = customer_info;
    return {
      orderId: order_id,
      orderTime: order_time,
      items,
      subtotal,
      taxFee: tax_fee,
      deliveryFee: delivery_fee,
      total,
      customerInfo: {
        firstName,
        lastName,
        ...customerInfo,
      },
      deliveryAddress: delivery_address,
      orderNow: order_now,
      orderLaterAfter: order_later_after,
      paymentMethod: payment_method,
    };
  },
};

const Menu = {
  mappingToDB({
    menuId,
    name,
    imageUrl,
    category,
    ranges,
    details,
    desc,
    price,
  }) {
    let targetDetail;

    if (details && !desc && !price) {
      const {toppings, sizes} = details;
      targetDetail = {
        toppings,
        sizes: [],
      };

      sizes.forEach((size) => {
        const {sizeInInch, totalSlice, ...sizeInfo} = size;
        targetDetail.sizes.push({
          ...sizeInfo,
          size_in_inch: sizeInInch,
          total_slice: totalSlice,
        });
      });

      return {
        menu_id: menuId,
        name,
        image_url: imageUrl,
        category,
        ranges,
        details: targetDetail,
      };
    }

    return {
      menu_id: menuId,
      name,
      image_url: imageUrl,
      category,
      ranges,
      desc,
      price,
    };
  },

  mappingToModel({
    menu_id,
    name,
    image_url,
    category,
    ranges,
    details,
    desc,
    price,
  }) {
    let targetDetail;

    if (details && !desc && !price) {
      const {toppings, sizes} = details;
      targetDetail = {
        toppings,
        sizes: [],
      };
      sizes.forEach((size) => {
        const {size_in_inch, total_slice, ...size_info} = size;
        targetDetail.sizes.push({
          ...size_info,
          sizeInInch: size_in_inch,
          totalSlice: total_slice,
        });
      });
      return {
        menuId: menu_id,
        name,
        imageUrl: image_url,
        category,
        ranges,
        details: targetDetail,
      };
    }

    return {
      menuId: menu_id,
      name,
      imageUrl: image_url,
      category,
      ranges,
      desc,
      price,
    };
  },

  getMenuCategoryByKeyword(keyword) {
    const category = {
      'pizza': 'Pizza',
      'side-dessert': 'Side & Dessert',
      'drink': 'Drink',
    };
    return category[keyword];
  },
};

module.exports = {
  nanoid,
  User,
  Cart,
  Order,
  Menu,
};
