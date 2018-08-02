const routes = require('next-routes')();

routes
  .add({ name: 'home_page', pattern: '/', page: 'index' })
  .add({ name: 'about', pattern: '/about/college', page: 'about/college' })
  .add({ name: 'academics', pattern: '/academics/programmes', page: 'academics/programmes' })
  .add({ name: 'news', pattern: '/news', page: 'news' })
  .add({ name: 'error', pattern: '/:error', page: 'page' });
// .add({ name: 'page_sub', pattern: '/:main/:sub', page: 'page_main_sub' });

module.exports = routes;
