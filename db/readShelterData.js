const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");
const express = require("express");
const { getShelterData, queryShelterUrl } = require("../shelterIndex");

let sheltertype;



// Connect to MongDB
async function readShelterData() {
  const url =
    "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(url);

  try {
    await client.connect();

    await findRecords(client, "River Front");

    //[getShelterData(queryShelterUrl)]);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
readShelterData().catch(console.error);



async function findRecords(client, name) {
  const result = await client
    .db("shelter_occupancy")
    .collection("LocationAndCapacity")
    .findOne({ name: sheltertype });
  if (result) {
    console.log(
      `Found a listing in the collection with the name '${name}':`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name '${name}'`);
  }
}



module.exports = { readShelterData, findRecords };
