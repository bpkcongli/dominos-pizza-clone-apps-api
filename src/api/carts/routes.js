const routes = (handler) => [
  {
    method: 'GET',
    path: '/users/{userId}/carts',
    handler: handler.getSpecificCartHandler,
    options: {
      auth: 'dominos_pizza_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/users/{userId}/carts',
    handler: handler.putSpecificCartHandler,
    options: {
      auth: 'dominos_pizza_jwt',
    },
  },
];

module.exports = routes;
