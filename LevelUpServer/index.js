const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');
const PORT = 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/Tasks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/tasks', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
