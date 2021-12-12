const bcrypt = require('bcrypt');
const DatabaseUtils = require('../../utils/DatabaseUtils');
const {nanoid, User} = require('../../utils/ModelUtils');
const BadRequestError = require('../../exceptions/BadRequestError');
const NotFoundError = require('../../exceptions/NotFoundError');
const AuthenticationError = require('../../exceptions/AuthenticationError');

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
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdAt = new Date();
    const lastUpdated = createdAt;
    const userDocument = User.mappingToDB({
      userId,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      dateOfBirth,
      contact,
      addresses,
      cart: {
        items: [],
        subtotal: 0,
        tax_fee: 0,
        delivery_fee: 0,
        total: 0,
      },
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
    const result = await users.findOne({user_id: id}, {projection: {_id: 0, password: 0}});
    if (!result) throw new NotFoundError('Maaf, resource yang Anda minta tidak ditemukan pada server kami.');
    return User.mappingToModel(result);
  }

  async updateUserById(id, {
    firstName,
    lastName,
    email,
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

  async updateUserPassword(id, {currentPassword, newPassword}) {
    const db = await DatabaseUtils.createConnection();
    const users = await db.collection('users');
    const targetUser = await users.findOne({user_id: id}, {projection: {_id: 0, password: 1}});

    if (!targetUser) throw new NotFoundError('Maaf, resource yang Anda minta tidak ditemukan pada server kami.');

    const {password: hashedPassword} = targetUser;
    const result = await bcrypt.compare(currentPassword, hashedPassword);

    if (!result) throw new BadRequestError('Gagal memperbarui password. Kredensial yang Anda berikan salah.');

    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    await users.updateOne({user_id: id}, {
      '$set': {
        'password': newHashedPassword,
      },
    });
  }

  async verifyUserCredentials({email, password}) {
    const db = await DatabaseUtils.createConnection();
    const users = await db.collection('users');
    const {user_id: userId, password: hashedPassword} = await users.findOne({email}, {projection: {_id: 0, user_id: 1, password: 1}});

    const result = await bcrypt.compare(password, hashedPassword);
    if (!result) throw new AuthenticationError('Maaf, kredensial yang Anda masukkan salah.');
    return userId;
  }

  async _verifyEmail(email) {
    const db = await DatabaseUtils.createConnection();
    const users = await db.collection('users');
    const result = await users.count({email});

    if (result) throw new BadRequestError('Gagal menambahkan user. Email sudah pernah digunakan.');
  }
}

module.exports = UsersService;
