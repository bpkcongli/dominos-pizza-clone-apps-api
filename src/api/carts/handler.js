class CartsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
    this.getSpecificCartHandler = this.getSpecificCartHandler.bind(this);
    this.putSpecificCartHandler = this.putSpecificCartHandler.bind(this);
  }

  async getSpecificCartHandler(request) {
    const {userId} = request.params;
    const cart = await this._service.getCartByUserId(userId);
    return {
      'status': 'success',
      'data': {
        'cart': {
          userId,
          ...cart,
        },
      },
    };
  }

  async putSpecificCartHandler(request) {
    this._validator.validateCartPayload(request.payload);
    const {userId} = request.params;
    await this._service.updateCart(userId, request.payload);
    return {
      'status': 'success',
      'message': 'Keranjang user berhasil diperbarui.',
    };
  }
}

module.exports = CartsHandler;
