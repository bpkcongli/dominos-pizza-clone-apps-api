const {nanoid, Order} = require('../../utils/ModelUtils');
const DatabaseUtils = require('../../utils/DatabaseUtils');
const NotFoundError = require('../../exceptions/NotFoundError');

class OrdersService {
  async addOrder({
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
    const db = await DatabaseUtils.createConnection();
    const orders = await db.collection('orders');

    const orderId = `order-${nanoid()}`;
    const orderTime = new Date();
    const orderDocument = Order.mappingToDB({
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
    });

    const result = await orders.insertOne(orderDocument);
    if (result.acknowledged && result.insertedId) {
      return orderId;
    }
  }

  async getOrderByUserId(id) {
    const db = await DatabaseUtils.createConnection();
    const orders = await db.collection('orders');
    await this._verifyUser(id);
    const result = await orders.find(
        {user_id: id},
        {projection: {_id: 0, user_id: 0}},
    ).toArray();
    return result;
  }

  async _verifyUser(id) {
    const db = await DatabaseUtils.createConnection();
    const users = await db.collection('users');
    const result = await users.findOne({user_id: id}, {projection: {_id: 0, user_id: 1}});
    if (!result) throw new NotFoundError('Maaf, resource yang Anda minta tidak ditemukan pada server kami.');
  }
}

module.exports = OrdersService;
