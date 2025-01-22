const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express(); // Initialize app here
const PORT = process.env.PORT || 5002; 

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

// MongoDB connection
const dbURI = process.env.MONGO_URI; 
if (!dbURI) {
  console.error('Error: MONGO_URI not defined in .env file');
  process.exit(1); // Exit the app if MONGO_URI is not set
}

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the app if unable to connect to MongoDB
  });

// Routes
app.use('/api', userRoutes); // Use userRoutes here
app.use('/api/events', eventRoutes); // Mount eventRoutes at /api/events

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
