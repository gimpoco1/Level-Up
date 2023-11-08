'use strict';
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: String,
  description: String,
  difficulty: String
});

module.exports = mongoose.model('Task', taskSchema);

