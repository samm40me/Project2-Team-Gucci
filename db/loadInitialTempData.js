const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");
const express = require("express");
const { getTempData, queryTemUrl } = require("../tempIndex");
const { json } = require("express");
const temJSON = require("./temp.json");
var tempString = JSON.stringify(temJSON);
var tempData = JSON.parse(tempString);
var featuresArray = tempData["features"];

// Connect to MongDB
async function loadTempData() {
  const url =
    "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(url);

  try {
    await client.connect();


    const TempData = await featuresArray;
    console.log("this is temperature Data", TempData);
    await createMultipleListings(client, TempData);

    //[getShelterData(queryShelterUrl)]);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
loadTempData().catch(console.error);

async function createMultipleListings(client, newListings) {
  const result = await client
    .db("shelter_occupancy")
    .collection("MinAndMaxTemperature")
    .insertMany(newListings);
  //console.log(newListings);
  console.log(
    `${result.insertedCount} new listing created with the following id (s):`
  );

  console.log(result.insertedIds);
}

async function createListing(client, newListing) {
  const result = await client
    .db("shelter_occupancy")
    .collection("MinAndMaxTemperature")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

module.exports = { loadTempData };