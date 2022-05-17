import mongoose from 'mongoose';
const Schema = mongoose.Schema

const shelterSchema = new Schema({
  date: {
    type: Date
  },
  year: {
    type: Date
  },
  month: {
    type: String
  },
  city: {
    type: String
  },
  sheltertype: {
    type: String
  },
  sheltername: {
    type: String
  },
  organization: {
    type: String
  },
  shelter: {
    type: String
  },
  capacity: {
    type: Number
  },
  overnight: {
    type: Number
  }
});

const Shelter = mongoose.model("Shelter", shelterSchema);

const createShelterData = async (shelter) => {
  const newShelterData = await Shelter.create(shelter);
  return newShelterData;
};

const getAllShelterData = async () => {
  const shelters = await Shelter.find();
  return shelters;
};

const getShelterDataByShelterType = async (sheltertype) => {
  const shelter = await Shelter.findBysheltertype(sheltertype);
  console.log(`shelter is ${shelter}`);
  return shelter;
};

const updateShelterData = async (sheltertype, updateData) => {
  const updatedShelterData = await Shelter.findBysheltertypeAndUpdate(
    sheltertype,
    updateData,
    {
      new: true,
    }
  );
  return updateShelterData;
};

module.exports = {
  createShelterData,
  getAllShelterData,
  getShelterDataByShelterType,
  updateShelterData,
};



//export default Shelter;

