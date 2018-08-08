const routes = require('next-routes')();

routes
  .add({ name: 'home_page', pattern: '/', page: 'index' })
  .add({ name: 'about', pattern: '/about', page: 'about/college' })
  .add({
    name: 'administration',
    pattern: '/about/administration',
    page: 'about/administration',
  })
  .add({
    name: 'academics/programmes',
    pattern: '/academics/programmes',
    page: 'academics/programmes',
  })
  .add({
    name: 'academics/programmes/B.Tech',
    pattern: '/academics/programmes/B.Tech',
    page: 'academics/programmes/B.Tech',
  })
  .add({
    name: 'academics/admissions',
    pattern: '/academics/admissions',
    page: 'academics/admissions',
  })
  .add({ name: 'events', pattern: '/events', page: 'events' })
  .add({ name: 'research', pattern: '/research', page: 'research' })
  .add({ name: 'news', pattern: '/news', page: 'news' })
  .add({ name: 'error', pattern: '/:error', page: 'page' });
// .add({ name: 'page_sub', pattern: '/:main/:sub', page: 'page_main_sub' });

module.exports = routes;
