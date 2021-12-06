const routes = (handler) => [
  {
    method: 'POST',
    path: '/orders',
    handler: handler.postOrderHandler,
  },
  {
    method: 'GET',
    path: '/users/{userId}/orders',
    handler: handler.getSpecificUserOrdersHandler,
  },
];

module.exports = routes;
