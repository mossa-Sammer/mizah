require('dotenv').config();
const { join } = require('path');

const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
// const favicon = require('serve-favicon');

const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));

app.set('port', process.env.PORT || 5000);

app.use('/api/v1', router);

if ((process.env.NODE_ENV = 'production')) {
  app.use(
    express.static(join(__dirname, '..', 'client', 'build'), { maxAge: '1d' })
  );
  // app.use(favicon(join(__dirname, '..', 'client', 'build', 'favicon.ico')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
