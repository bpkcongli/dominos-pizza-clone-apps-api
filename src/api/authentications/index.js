const routes = require('./routes');
const AuthenticationsHandler = require('./handler');

module.exports = {
  name: 'authentications',
  version: '0.0.1',
  register: async (server, {usersService, authenticationsService, validator, tokenManager}) => {
    const authenticationsHandler = new AuthenticationsHandler({usersService, authenticationsService, validator, tokenManager});
    server.route(routes(authenticationsHandler));
  },
};
