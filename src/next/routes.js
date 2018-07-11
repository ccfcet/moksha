const routes = require('next-routes')();

routes
  .add({ name: 'home_page', pattern: '/', page: 'index' })
  .add({ name: 'page', pattern: '/:url', page: 'page' });

module.exports = routes;
