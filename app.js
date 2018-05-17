const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Include API Routes
require('./server/routes')(app);

app.get('*', function(req, res) {
  res.send("<h1>Hello World!</h1>");
});

module.exports = app;