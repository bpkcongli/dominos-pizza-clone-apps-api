const routes = (handler) => [
  {
    method: 'POST',
    path: '/authentications',
    handler: handler.postUserCredentialsHandler,
  },
  {
    method: 'PUT',
    path: '/authentications',
    handler: handler.putAuthenticationsHandler,
  },
  {
    method: 'DELETE',
    path: '/authentications/{refreshToken}',
    handler: handler.deleteAuthenticationsHandler,
  },
];

module.exports = routes;
