const routes = require('./routes');
const CartsHandler = require('./handler');

module.exports = {
  name: 'carts',
  version: '0.0.1',
  register: async (server, {service, validator}) => {
    const cartsHandler = new CartsHandler(service, validator);
    server.route(routes(cartsHandler));
  },
};
