const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");
const express = require("express");
const { getTempData, queryTemUrl } = require("../tempIndex");

const uri =
  "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function deleteTempData() {
  try {
    await client.connect();

    const database = client.db("shelter_occupancy");
    const temperature = database.collection("MinAndMaxTemperature");

    const query = { type: { $regex: "Feature" } };
    const result = await temperature.deleteMany(query);
    console.log("Deleted " + result.deletedCount + " documents");
  } finally {
    await client.close();
  }
}
deleteTempData().catch(console.dir);

module.exports = { deleteTempData };
