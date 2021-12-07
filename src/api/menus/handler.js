class MenusHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
    this.postMenuHandler = this.postMenuHandler.bind(this);
    this.getMenuByCategoryHandler = this.getMenuByCategoryHandler.bind(this);
  }

  async postMenuHandler(request, h) {
    this._validator.validateMenuPayload(request.payload);
    const menuId = await this._service.addMenu(request.payload);

    return h.response({
      'status': 'success',
      'message': 'Menu baru berhasil ditambahkan.',
      'data': {
        menuId,
      },
    }).code(201);
  }

  async getMenuByCategoryHandler(request) {
    const {category} = request.query;
    const menus = (category) ?
      await this._service.getMenusByCategory(category) :
      await this._service.getMenusByCategory();

    return {
      'status': 'success',
      'data': {
        menus,
      },
    };
  }
}

module.exports = MenusHandler;
