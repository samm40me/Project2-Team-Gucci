const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directorSchema = new Schema({
  date: Date,
  year: String,
  month: String,
  city: String,
  sheltertype: String,
  sheltername: String,
  organization: String,
  shelter: String,
  capacity: Number,
  overnight: Number,
});

module.exports = mongoose.model('Director', directorSchema)