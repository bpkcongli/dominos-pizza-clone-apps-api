const DatabaseUtils = require('../../utils/DatabaseUtils');
const {nanoid, User} = require('../../utils/ModelUtils');
const BadRequestError = require('../../exceptions/BadRequestError');
const NotFoundError = require('../../exceptions/NotFoundError');

class UsersService {
  async addUser({
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    contact,
    addresses,
  }) {
    await this._verifyEmail(email);
    const db = await DatabaseUtils.createConnection();
    const users = await db.collection('users');

    const userId = `user-${nanoid()}`;
    const createdAt = lastUpdated = new Date();
    const userDocument = User.mappingToDB({
      userId,
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      contact,
      addresses,
      createdAt,
      lastUpdated,
    });
    const result = await users.insertOne(userDocument);
    if (result.acknowledged && result.insertedId) {
      return userId;
    }
  }

  async getUserById(id) {
    const db = await DatabaseUtils.createConnection();
    const users = await db.collection('users');
    const result = await users.findOne({user_id: id});
    if (!result) throw new NotFoundError('Maaf, resource yang Anda minta tidak ditemukan pada server kami.');
    return User.mappingToModel(result);
  }

  async updateUserById(id, {
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    contact,
    addresses,
  }) {
    const db = await DatabaseUtils.createConnection();
    const users = await db.collection('users');
    const result = await users.updateOne({user_id: id}, {
      '$set': {
        'first_name': firstName,
        'last_name': lastName,
        email,
        password,
        'date_of_birth': dateOfBirth,
        contact,
        addresses,
        'last_updated': new Date(),
      },
    });

    if (!result.matchedCount) {
      throw new NotFoundError('Maaf, resource yang Anda minta tidak ditemukan pada server kami.');
    }
  }

  async _verifyEmail(email) {
    const db = await DatabaseUtils.createConnection();
    const users = await db.collection('users');
    const result = await users.findOne({email});

    if (result) throw new BadRequestError('Gagal menambahkan user. Email sudah pernah digunakan.');
  }
}

module.exports = UsersService;
