const mongoose = require("../mongoose");
var debug = require("debug")("server:MongooseModel");

const { Schema, model } = mongoose;

// create SCHEMA for the data expected
const superheroSchema = new Schema({
  name: { type: String, required: true, unique: true },
  superpowers: [String],
  alterEgo: String,
  durability: String,
});

// Create MODEL
const Superhero = model("Superhero", superheroSchema);

// function to CREATE A superhero - mongoose
const createSuperhero = async (superhero) => {
  const newSuperhero = await Superhero.create(superhero); // CREATE query
  return newSuperhero;
};

//     returning a list of superheraoes - mongoose
const getAllSuperheroes = async () => {
  const superheroes = await Superhero.find(); // FIND query
  return superheroes;
};

//  Eventually will get a more refined filter----not a get all

//  GET ONE superhero
const getSuperheroById = async (id) => {
  console.log(`GetsuperherobyId Function -- id is: `, id);
  const superhero = await Superhero.findById(id); // returns a mongoose query
  debug(`superhero is: `, superhero);
  return superhero;
};

//  update/ edit a superhero
const updateSuperhero = async (id, updateData) => {
  const updatedSuperhero = await Superhero.findByIdAndUpdate(id, updateData, {
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
  getAllSuperheroes,
  createSuperhero,
  getSuperheroById,
  updateSuperhero,
};
