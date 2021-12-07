const routes = (handler) => [
  {
    method: 'POST',
    path: '/menus',
    handler: handler.postMenuHandler,
  },
  {
    method: 'GET',
    path: '/menus',
    handler: handler.getMenuByCategoryHandler,
  },
];

module.exports = routes;
