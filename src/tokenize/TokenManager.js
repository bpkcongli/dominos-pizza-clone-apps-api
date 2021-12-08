const Jwt = require('@hapi/jwt');
const BadRequestError = require('../exceptions/BadRequestError');

const TokenManager = {
  generateAccessToken: (payload) => Jwt.token.generate(payload, process.env.ACCESS_TOKEN_KEY),

  genereateRefreshToken: (payload) => Jwt.token.generate(payload, process.env.REFRESH_TOKEN_KEY),

  verifyRefreshToken: (refreshToken) => {
    try {
      const artifacts = Jwt.token.decode(refreshToken);
      Jwt.token.verifySignature(artifacts, process.env.REFRESH_TOKEN_KEY);

      return artifacts.decoded.payload;
    } catch (error) {
      throw new BadRequestError('Maaf, refresh token yang Anda masukkan tidak valid.');
    }
  },
};

module.exports = TokenManager;
