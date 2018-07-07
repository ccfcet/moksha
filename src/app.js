const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const helmet = require('helmet');
const nextJS = require('next');

const routes = require('./routes');

const app = express();

const dev = process.env.NODE_ENV !== 'production';
app.nextJSapp = nextJS({
  dev,
  dir: './next',
});

const handler = routes.getRequestHandler(app.nextJSapp);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());

// middleware for use of next.js
app.use(handler);

module.exports = app;
