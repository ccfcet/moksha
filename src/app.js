const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const helmet = require('helmet');

const router = require('./routes/index');

const app = express();
app.nextJS = null;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());

// middleware for use of next.js
app.use((req, res, next) => {
  // include nextJS app in res
  res.nextJS = app.nextJS;
  res.nextJS.handle = app.nextJS.getRequestHandler();
  next();
});

app.use('/', router);

module.exports = app;
