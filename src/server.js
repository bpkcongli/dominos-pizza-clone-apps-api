// import all requirement modules
const Hapi = require('@hapi/hapi');
const Jwt = require('@hapi/jwt');
require('dotenv').config();
const ClientError = require('./exceptions/ClientError');

// import all plugins
const users = require('./api/users/index');
const carts = require('./api/carts/index');
const orders = require('./api/orders/index');
const menus = require('./api/menus/index');
const authentications = require('./api/authentications/index');

// import all services
const UsersService = require('./services/mongodb/UsersService');
const CartsService = require('./services/mongodb/CartsService');
const OrdersService = require('./services/mongodb/OrdersService');
const MenusService = require('./services/mongodb/MenusService');
const AuthenticationsService = require('./services/mongodb/AuthenticationsService');

// import all validators
const UsersValidator = require('./validators/users/index');
const CartsValidator = require('./validators/carts/index');
const OrdersValidator = require('./validators/orders/index');
const MenusValidator = require('./validators/menus/index');
const AuthenticationsValidator = require('./validators/authentications/index');

// token manager
const TokenManager = require('./tokenize/TokenManager');

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
  const cartsService = new CartsService();
  const ordersService = new OrdersService();
  const menusService = new MenusService();
  const authenticationsService = new AuthenticationsService();

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

  // register external plugin
  await server.register([
    {
      plugin: Jwt,
    },
  ]);

  // authentication strategy using jwt
  server.auth.strategy('dominos_pizza_jwt', 'jwt', {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: process.env.ACCESS_TOKEN_AGE,
    },
    validate: (artifacts) => ({
      isValid: true,
      credentials: {
        id: artifacts.decoded.payload.userId,
      },
    }),
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
    {
      plugin: carts,
      options: {
        service: cartsService,
        validator: CartsValidator,
      },
      routes: {
        prefix: '/api/v1',
      },
    },
    {
      plugin: orders,
      options: {
        service: ordersService,
        validator: OrdersValidator,
      },
      routes: {
        prefix: '/api/v1',
      },
    },
    {
      plugin: menus,
      options: {
        service: menusService,
        validator: MenusValidator,
      },
      routes: {
        prefix: '/api/v1',
      },
    },
    {
      plugin: authentications,
      options: {
        usersService,
        authenticationsService,
        validator: AuthenticationsValidator,
        tokenManager: TokenManager,
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
