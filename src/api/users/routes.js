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
  },
  {
    method: 'PUT',
    path: '/users/{userId}',
    handler: handler.putSpecificUserHandler,
  },
  {
    method: 'PUT',
    path: '/users/{userId}/password',
    handler: handler.putSpecificUserPasswordHandler,
  },
];

module.exports = routes;
