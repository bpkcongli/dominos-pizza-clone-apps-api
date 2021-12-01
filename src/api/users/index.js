const routes = require('./routes');
const UsersHandler = require('./handler');

module.exports = {
  name: 'users',
  version: '0.0.1',
  register: async (server, {service, validator}) => {
    const usersHandler = new UsersHandler(service, validator);
    server.route(routes(usersHandler));
  },
};
