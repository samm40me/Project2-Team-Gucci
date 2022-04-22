const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");
const express = require("express");
const { getShelterData, queryShelterUrl } = require("../shelterIndex");

// Connect to MongDB
async function createShelterData() {
  const url =
    "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(url);

  try {
    await client.connect();

  const shelterData = await getShelterData(queryShelterUrl);
  console.log("this is shelterData", shelterData);
  await createMultipleListings(client, shelterData);

    //[getShelterData(queryShelterUrl)]);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
createShelterData().catch(console.error);

async function createMultipleListings(client, newListings) {
  const result = await client
    .db("shelter_occupancy")
    .collection("LocationAndCapacity")
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
    .collection("LocationAndCapacity")
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

module.exports = { createShelterData, createListing, createMultipleListings };