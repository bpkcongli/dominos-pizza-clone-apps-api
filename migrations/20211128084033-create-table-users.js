module.exports = {
  async up(db) {
    await db.createCollection('users');
    await db.collection('users').createIndex({user_id: 1, password: 1});
    await db.collection('users').createIndex({email: 1, user_id: 1, password: 1});
  },

  async down(db) {
    await db.collection('users').drop();
  },
};
