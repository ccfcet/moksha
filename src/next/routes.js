const routes = require('next-routes')();

routes
  .add({ name: 'home_page', pattern: '/', page: 'index' })
  .add({ name: 'about', pattern: '/:url', page: 'about' });

module.exports = routes;
