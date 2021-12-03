const DatabaseUtils = require('../../utils/DatabaseUtils');
const {Cart} = require('../../utils/ModelUtils');
const NotFoundError = require('../../exceptions/NotFoundError');

class CartsService {
  async updateCart(id, {
    items,
    subtotal,
    taxFee,
    deliveryFee,
    total,
  }) {
    const db = await DatabaseUtils.createConnection();
    const users = await db.collection('users');
    const cart = Cart.mappingToDB({
      items,
      subtotal,
      taxFee,
      deliveryFee,
      total,
    });
    const result = await users.updateOne(
        {user_id: id},
        {'$set': {cart}},
    );

    if (!result.matchedCount) throw new NotFoundError('Maaf, resource yang Anda minta tidak ditemukan pada server kami.');
  }

  async getCartByUserId(id) {
    const db = await DatabaseUtils.createConnection();
    const users = await db.collection('users');
    const result = await users.findOne({user_id: id}, {projection: {_id: 0, cart: 1}});
    if (!result) throw new NotFoundError('Maaf, resource yang Anda minta tidak ditemukan pada server kami.');
    return Cart.mappingToModel(result.cart);
  }
}

module.exports = CartsService;
