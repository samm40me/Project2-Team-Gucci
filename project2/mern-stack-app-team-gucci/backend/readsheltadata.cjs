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

     await minCapacityOvernight(client, {
       minimumNumberOfCapacity: 4,
       minimumNumberOfOvernight: 1,
       maximumNumberOfResults: 10,
     }); 
//     console.log(result)
    //[getShelterData(queryShelterUrl)]);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function minCapacityOvernight(
  client,
  {
    minimumNumberOfCapacity = 0,
    minimumNumberOfOvernight = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER,
  } = {}
) {
  const cursor = client
    .db("shelter_occupancy")
    .collection("LocationAndCapacity")
    .find({
      capacity: { $gte: minimumNumberOfCapacity },
      overnight: { $gte: minimumNumberOfOvernight },
    })
    .sort({ sheltername: -1 })
    .limit(maximumNumberOfResults);

  const results = await cursor.toArray();

  if (results.length > 0) {
    console.log(
      `Found listing(s) with at least ${minimumNumberOfCapacity} capacity and ${minimumNumberOfOvernight} overnight:`
    );
    results.forEach((result, i) => {
      date1 = Date(result.date).toDateString();

      console.log();
      console.log(`${i + 1}. sheltername: ${result.sheltername}`);
      console.log(`   _id: ${result._id}`);
      console.log(`   capacity: ${result.capacity}`);
      console.log(`   overnight: ${result.overnight}`);
      console.log(
        `   most recent review date: ${Date(
          result.date
        ).toDateString()}`
      );
    });
  } else {
    console.log(
      `No listings found with at least ${minimumNumberOfCapacity} capacity and ${minimumNumberOfOvernight} overnight`
    );
  }
}

async function findOneListingByName(client, name) {
    const result = await client
      .db("shelter_occupancy")
      .collection("LocationAndCapacity")
      .findOne({ sheltername: name });
    if (result) {
      console.log(
        `Found a listing in the collection with the name "${name}"`
      );
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
