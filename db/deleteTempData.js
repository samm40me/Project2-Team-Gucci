const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");
const express = require("express");
const { getShelterData, queryShelterUrl } = require("../shelterIndex");

const uri =
  "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function deleteShelterData() {
  try {
    await client.connect();

    const database = client.db("shelter_occupancy");
    const shelter = database.collection("LocationAndCapacity");

    const query = { city: { $regex: "Calgary" } };
    const result = await shelter.deleteMany(query);
    console.log("Deleted " + result.deletedCount + " documents");
  } finally {
    await client.close();
  }
}
deleteShelterData().catch(console.dir);

module.exports = { deleteShelterData };
