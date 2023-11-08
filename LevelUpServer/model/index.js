'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://[::1]:27017/Tasks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;

