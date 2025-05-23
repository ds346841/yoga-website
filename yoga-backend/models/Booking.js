const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  _id: String,  // e.g. "advanced01"
  title: String,
  instructor: String,
  level: String,
  date: String,
  time: String,
  price: Number,
  capacity: Number,
  enrolled: Number,
  spots_left: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
