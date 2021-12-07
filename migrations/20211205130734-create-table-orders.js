module.exports = {
  async up(db) {
    await db.createCollection('orders');
  },

  async down(db) {
    await db.collection('orders').drop();
  },
};
