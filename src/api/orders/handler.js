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

    return {
      'status': 'success',
      'data': {
        orders,
      },
    };
  }
}

module.exports = OrdersHandler;
