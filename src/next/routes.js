const routes = require('next-routes')();

routes
  .add({ name: 'page', pattern: '/:url', page: 'page' });

module.exports = routes;
