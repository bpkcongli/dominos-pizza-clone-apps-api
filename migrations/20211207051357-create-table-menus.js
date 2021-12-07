module.exports = {
  async up(db) {
    await db.createCollection('menus');
  },

  async down(db) {
    await db.collection('menus').drop();
  },
};
