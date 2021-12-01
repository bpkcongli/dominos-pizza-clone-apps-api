// import all requirement modules
const Hapi = require('@hapi/hapi');
require('dotenv').config();
const ClientError = require('./exceptions/ClientError');

// import all plugins
const users = require('./api/users/index');

// import all services
const UsersService = require('./services/mongodb/UsersService');

// import all validators
const UsersValidator = require('./validators/users/index');


const init = async () => {
  const server = Hapi.server({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // initiate all services
  const usersService = new UsersService();

  // error handling automatically run before the response is sent
  server.ext('onPreResponse', (request, h) => {
    const {response} = request;

    if (response instanceof ClientError) {
      return h.response({
        'status': 'fail',
        'message': response.message,
      }).code(response.statusCode);
    } else if (response.isServer) {
      return h.response({
        'status': 'error',
        'message': 'Maaf, terjadi kegagalan pada server kami.',
      }).code(500);
    } else if (response.isBoom) {
      return h.response({
        'status': 'fail',
        'message': response.output.payload.message,
      }).code(response.output.payload.statusCode);
    }

    return response.continue || response;
  });

  await server.register([
    {
      plugin: users,
      options: {
        service: usersService,
        validator: UsersValidator,
      },
      routes: {
        prefix: '/api/v1',
      },
    },
  ]);

  await server.start();
  console.log(`Server running on: ${server.info.uri}`);
};

init();
