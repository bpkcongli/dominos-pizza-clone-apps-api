const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHandler,
  },
  {
    method: 'GET',
    path: '/users/{userId}',
    handler: handler.getSpecificUserHandler,
    options: {
      auth: 'dominos_pizza_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/users/{userId}',
    handler: handler.putSpecificUserHandler,
    options: {
      auth: 'dominos_pizza_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/users/{userId}/password',
    handler: handler.putSpecificUserPasswordHandler,
    options: {
      auth: 'dominos_pizza_jwt',
    },
  },
];

module.exports = routes;
