const AuthorizationError = require('../../exceptions/AuthorizationError');

class OrdersHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
    this.postOrderHandler = this.postOrderHandler.bind(this);
    this.getSpecificUserOrdersHandler = this.getSpecificUserOrdersHandler.bind(this);
  }

  async postOrderHandler(request, h) {
    this._validator.validateOrderPayload(request.payload);
    const orderId = await this._service.addOrder(request.payload);

    return h.response({
      'status': 'success',
      'message': 'Order baru berhasil ditambahkan.',
      'data': {
        orderId,
      },
    }).code(201);
  }

  async getSpecificUserOrdersHandler(request) {
    const {userId} = request.params;
    const orders = await this._service.getOrderByUserId(userId);

    const {id: credentialId} = request.auth.credentials;
    if (userId !== credentialId) throw new AuthorizationError('Maaf, Anda tidak memiliki otorisasi untuk mengakses resource ini.');

    return {
      'status': 'success',
      'data': {
        orders,
      },
    };
  }
}

module.exports = OrdersHandler;
