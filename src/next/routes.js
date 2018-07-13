const routes = require('next-routes')();

routes
  .add({ name: 'home_page', pattern: '/', page: 'index' })
  .add({ name: 'contact', pattern: '/contact', page: 'contact' });
module.exports = routes;
