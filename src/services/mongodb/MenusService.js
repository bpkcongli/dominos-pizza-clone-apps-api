const DatabaseUtils = require('../../utils/DatabaseUtils');
const {nanoid, Menu} = require('../../utils/ModelUtils');

class MenusService {
  async addMenu(payload) {
    const db = await DatabaseUtils.createConnection();
    const menus = await db.collection('menus');
    const menuId = `menu-${nanoid()}`;
    const menuDocument = Menu.mappingToDB({menuId, ...payload});
    const result = await menus.insertOne(menuDocument);

    if (result.acknowledged && result.insertedId) {
      return menuId;
    }
  }

  async getMenusByCategory(category = null) {
    const db = await DatabaseUtils.createConnection();
    const menus = await db.collection('menus');
    const results = (category) ? await menus.find({category: Menu.getMenuCategoryByKeyword(category)}) : await menus.find();
    return (await results.toArray()).map((result) => Menu.mappingToModel(result));
  }
}

module.exports = MenusService;
