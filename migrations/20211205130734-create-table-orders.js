module.exports = {
  async up(db) {
    await db.createCollection('orders');
    await db.collection('orders').createIndex({user_id: 1});
  },

  async down(db) {
    await db.collection('orders').drop();
  },
};
