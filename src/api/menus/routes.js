const routes = (handler) => [
  {
    method: 'POST',
    path: '/menus',
    handler: handler.postMenuHandler,
    options: {
      auth: 'dominos_pizza_jwt',
    },
  },
  {
    method: 'GET',
    path: '/menus',
    handler: handler.getMenuByCategoryHandler,
  },
];

module.exports = routes;
