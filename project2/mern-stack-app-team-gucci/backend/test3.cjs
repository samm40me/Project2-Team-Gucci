const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");
const express = require("express");
const fs = require("fs");

// Connect to MongDB
async function main() {
  const url =
    "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(url);

  try {
    await client.connect();
    //    await findOneListingByName(client, "Calgary YWCA");

      await readShelterTypeAndShelter(client, [
        "Women Emergency",
        "Calgary YWCA",
      ]);
    //     console.log(result)
    //[getShelterData(queryShelterUrl)]);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

//let _shelter;
//let shelter_type;

async function readShelterTypeAndShelter(client, { shelter_type = "", _shelter = "" } = {}) {
    const cursor = await client
      .db("shelter_occupancy")
      .collection("LocationAndCapacity")
      .find(sheltertype: shelter_type , shelter: _shelter);
    const results = await cursor.toArray();
    if (results.length > 0) {
        results.forEach((result, i) => {
            console.log();
            console.log(`   sheltertype: ${result.name}`);
            console.log(`   shelter: ${result.name}`);
        }) 
        
//    else { console.log(`No listing found with the name "${name}"`)
//        }
    }
}


async function findOneListingByName(client, name) {
  const result = await client
    .db("shelter_occupancy")
    .collection("LocationAndCapacity")
    .findOne({ sheltername: name });
  if (result) {
    console.log(`Found a listing in the collection with the name "${name}"`);
    console.log(result);
  } else {
    console.log(`No listing found with the name "${name}"`);
  }
}
//const content = JSON.stringify(getShelterData(queryShelterUrl));

// Defining new user
//let user = getShelterData(queryShelterUrl)
// STEP 2: Adding new data to users object

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
