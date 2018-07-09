const nextJS = require('next');

const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';

const nextJSapp = nextJS({
  dev,
  dir: './next',
});

nextJSapp.handler = routes.getRequestHandler(nextJSapp);

module.exports = nextJSapp;
