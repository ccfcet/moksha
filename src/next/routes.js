const routes = require('next-routes')();

routes
  .add({ name: 'home_page', pattern: '/', page: 'index' })
  .add({ name: 'about', pattern: '/about/college', page: 'about/college' })
  .add({ name: 'news', pattern: '/news', page: 'news' });
// .add({ name: 'page_main', pattern: '/:main', page: 'page_main' })
// .add({ name: 'page_sub', pattern: '/:main/:sub', page: 'page_main_sub' });

module.exports = routes;
