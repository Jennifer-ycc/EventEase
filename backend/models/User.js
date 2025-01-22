const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  Project: String,
  Status: String,
  Weeks: Number,
  Budget : Number,
  Location : String,
  CustomerID : Number,
  Action : String,
});

module.exports = mongoose.model('User', userSchema);
