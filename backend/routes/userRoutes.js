const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all documents in the `users` collection
    res.json(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
