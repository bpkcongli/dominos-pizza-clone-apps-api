class AuthenticationsHandler {
  constructor({usersService, authenticationsService, validator, tokenManager}) {
    this._usersService = usersService;
    this._authenticationsService = authenticationsService;
    this._validator = validator;
    this._tokenManager = tokenManager;
    this.postUserCredentialsHandler = this.postUserCredentialsHandler.bind(this);
    this.putAuthenticationsHandler = this.putAuthenticationsHandler.bind(this);
    this.deleteAuthenticationsHandler = this.deleteAuthenticationsHandler.bind(this);
  }

  async postUserCredentialsHandler(request, h) {
    this._validator.validateUserCredentialPayload(request.payload);
    const {email, password} = request.payload;
    const userId = await this._usersService.verifyUserCredentials({email, password});
    const accessToken = this._tokenManager.generateAccessToken({userId});
    const refreshToken = this._tokenManager.genereateRefreshToken({userId});
    await this._authenticationsService.addRefreshToken(refreshToken);

    return h.response({
      'status': 'success',
      'message': 'Authentication berhasil ditambahkan.',
      'data': {
        accessToken,
        refreshToken,
      },
    }).code(201);
  }

  async putAuthenticationsHandler(request) {
    this._validator.validateRefreshTokenPayload(request.payload);
    const {refreshToken} = request.payload;
    await this._authenticationsService.verifyRefreshToken(refreshToken);
    const {userId} = this._tokenManager.verifyRefreshToken(refreshToken);
    const accessToken = this._tokenManager.generateAccessToken({userId});

    return {
      'status': 'success',
      'message': 'Authentication berhasil diperbarui.',
      'data': {
        accessToken,
      },
    };
  }

  async deleteAuthenticationsHandler(request) {
    const {refreshToken} = request.params;
    await this._authenticationsService.verifyRefreshToken(refreshToken);
    await this._authenticationsService.deleteRefreshToken(refreshToken);

    return {
      'status': 'success',
      'message': 'Authentication berhasil dihapus.',
    };
  }
}

module.exports = AuthenticationsHandler;
