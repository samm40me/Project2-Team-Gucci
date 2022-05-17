const mongoose = require("../mongoose");
var debug = require("debug")("server:MongooseModel");

const { Schema, model } = mongoose;

// create SCHEMA for the data expected
const shelterSchema = new Schema({
  date: { type: String,},
  year: String,
  month: String,
  city: String,
  sheltertype: String,
  sheltername: String,
  organization: String,
  shelter: String,
  capacity: String,
  overnight: String,
});

// Create MODEL
const Shelter = model("Shelter", shelterSchema);

// function to CREATE A superhero - mongoose
const createShelter = async (shelter) => {
  const newShelter = await Shelter.create(shelter); // CREATE query
  return newShelter;
};

//     returning a list of superheraoes - mongoose
const getAllShelters = async () => {
  const shelters = await Shelter.find(); // FIND query
  return shelters;
};

//  Eventually will get a more refined filter----not a get all

//  GET ONE superhero
const getSuperheroById = async (id) => {
  console.log(`GetsuperherobyId Function -- id is: `, id);
  const superhero = await Shelter.findById(id); // returns a mongoose query
  debug(`superhero is: `, superhero);
  return superhero;
};

//  update/ edit a superhero
const updateSuperhero = async (id, updateData) => {
  const updatedSuperhero = await Shelter.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return updatedSuperhero;
};

// //  to find superheroes by other properties
// const findSuperheroByName = async (name) => {
//   const superhero = await Superhero.findOne({name : name})
// }

// // Find multiple with an attribute Find for an array of things that match
// const findSuperheroByAttribute = async (durability => {
//   const superhero = await Superhero.find({durability: "Invincible"})
// })

// Export the two functions:
module.exports = {
  getAllSuperheroes: getAllShelters,
  createSuperhero: createShelter,
  getSuperheroById,
  updateSuperhero,
};
