const BadRequestError = require('../../exceptions/BadRequestError');
const DatabaseUtils = require('../../utils/DatabaseUtils');

class AuthenticationsService {
  async addRefreshToken(refreshToken) {
    const db = await DatabaseUtils.createConnection();
    const authentications = await db.collection('authentications');
    await authentications.insertOne({refresh_token: refreshToken});
  }

  async verifyRefreshToken(refreshToken) {
    const db = await DatabaseUtils.createConnection();
    const authentications = await db.collection('authentications');
    const result = await authentications.count({refresh_token: refreshToken});

    if (!result) throw new BadRequestError('Maaf, refresh token tidak dapat ditemukan di database.');
  }

  async deleteRefreshToken(refreshToken) {
    const db = await DatabaseUtils.createConnection();
    const authentications = await db.collection('authentications');
    await authentications.deleteOne({refresh_token: refreshToken});
  }
}

module.exports = AuthenticationsService;
