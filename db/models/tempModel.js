const mongoose = require("../mongoose");

const { Schema, model } = mongoose;

const shelterSchema = new Schema({
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

const Shelter = model("Shelter", shelterSchema);
