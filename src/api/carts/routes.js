const routes = (handler) => [
  {
    method: 'GET',
    path: '/users/{userId}/carts',
    handler: handler.getSpecificCartHandler,
  },
  {
    method: 'PUT',
    path: '/users/{userId}/carts',
    handler: handler.putSpecificCartHandler,
  },
];

module.exports = routes;
