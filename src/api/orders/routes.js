const routes = (handler) => [
  {
    method: 'POST',
    path: '/orders',
    handler: handler.postOrderHandler,
    options: {
      auth: 'dominos_pizza_jwt',
    },
  },
  {
    method: 'GET',
    path: '/users/{userId}/orders',
    handler: handler.getSpecificUserOrdersHandler,
    options: {
      auth: 'dominos_pizza_jwt',
    },
  },
];

module.exports = routes;
