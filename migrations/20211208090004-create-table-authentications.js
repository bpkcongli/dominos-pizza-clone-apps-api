module.exports = {
  async up(db) {
    await db.createCollection('authentications');
  },

  async down(db) {
    await db.collection('authentications').drop();
  },
};
