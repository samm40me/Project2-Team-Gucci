import {
  createShelterData,
  getAllShelterData,
  getShelterDataByShelterType,
  updateShelterData
} from "../models/shelterSchema.js";

export const getPosts = async (req, res) => {
    try {
        const shelter = await getAllShelterData.find();
        console.log(shelter)

        res.status(200).json(shelter)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const body = req.body;
    const newShelter = new createShelterData()(body);

    try {
        await newShelter.save()

        res.status(200).json(newShelter)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}