module.exports = {
  async up(db) {
    await db.createCollection('menus');
    await db.collection('menus').createIndex({category: 1});
  },

  async down(db) {
    await db.collection('menus').drop();
  },
};
