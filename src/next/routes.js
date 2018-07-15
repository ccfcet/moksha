const routes = require('next-routes')();

routes
  .add({ name: 'home_page', pattern: '/', page: 'index' })
  .add({ name: 'contact', pattern: '/contact', page: 'contact' })
  .add({ name: 'department', pattern: '/departments', page: 'departments' })
  .add({ name: 'activities', pattern: '/activities', page: 'activities' })
  .add({ name: 'about', pattern: '/about', page: 'about' });

module.exports = routes;
