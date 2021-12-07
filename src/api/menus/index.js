const routes = require('./routes');
const MenusHandler = require('./handler');

module.exports = {
  name: 'menus',
  version: '0.0.1',
  register: async (server, {service, validator}) => {
    const menusHandler = new MenusHandler(service, validator);
    server.route(routes(menusHandler));
  },
};
