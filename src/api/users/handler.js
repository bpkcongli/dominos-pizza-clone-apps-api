class UsersHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
    this.postUserHandler = this.postUserHandler.bind(this);
    this.getSpecificUserHandler = this.getSpecificUserHandler.bind(this);
    this.putSpecificUserHandler = this.putSpecificUserHandler.bind(this);
    this.putSpecificUserPasswordHandler = this.putSpecificUserPasswordHandler.bind(this);
  }

  async postUserHandler(request, h) {
    this._validator.validateCreateUserPayload(request.payload);
    const userId = await this._service.addUser(request.payload);

    return h.response({
      'status': 'success',
      'message': 'User baru berhasil ditambahkan.',
      'data': {
        userId,
      },
    }).code(201);
  }

  async getSpecificUserHandler(request) {
    const {userId} = request.params;
    const user = await this._service.getUserById(userId);

    return {
      'status': 'success',
      'data': {
        user,
      },
    };
  }

  async putSpecificUserHandler(request, h) {
    this._validator.validateUpdateUserPayload(request.payload);
    const {userId} = request.params;
    await this._service.updateUserById(userId, request.payload);

    return {
      'status': 'success',
      'message': 'Profil user berhasil diperbarui.',
    };
  }

  async putSpecificUserPasswordHandler(request) {
    this._validator.validateUpdateUserPasswordPayload(request.payload);
    const {userId} = request.params;
    const {currentPassword, newPassword} = request.payload;

    await this._service.updateUserPassword(userId, {currentPassword, newPassword});

    return {
      'status': 'success',
      'message': 'Password user berhasil diperbarui.',
    };
  }
}

module.exports = UsersHandler;
