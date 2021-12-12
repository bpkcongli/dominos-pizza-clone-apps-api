const pizzas = require('../data/pizza');
const sideDesserts = require('../data/side-dessert');
const drinks = require('../data/drink');

module.exports = {
  async up(db) {
    const menus = await db.collection('menus');
    const menusToInsert = [...pizzas, ...sideDesserts, ...drinks];
    await menus.insertMany(menusToInsert);

    const totalMenusInserted = await menus.count();
    console.log(`Total menus inserted: ${totalMenusInserted}/${menusToInsert.length}`);
  },

  async down(db) {
    const menus = await db.collection('menus');
    const result = await menus.deleteMany({});
    console.log(`Total items deleted: ${result.deletedCount}`);
  },
};
