const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  budget: { type: Number },
  description: { type: String },
});

module.exports = mongoose.model('Event', eventSchema);
