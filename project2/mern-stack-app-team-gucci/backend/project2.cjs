const { MongoClient } = require("mongodb");
//var async = require("express-async-await");
const fetch = require("node-fetch");
const express = require("express");
//import fetch from "node-fetch";

// Connect to MongDB
async function main() {
  const url =
    "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(url);

  try {
    await client.connect();

    await createMultipleListings(client, getShelterData(queryShelterUrl));

    
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

//async function findOneListingByName(client, nameOfListing) {
//  client.db("sample_airbnb").collection("listingsAndReviews").findOne();
//}
// To get Shelter Data
ShelterData = {
  url: "https://data.calgary.ca/resource/7u2t-3wxf.json?",
  params: {
    date: "2021-01-14T00:00:00.000",
  },
};
//<script>
function encodeQueryShelter(data) {
  let query = data.url;
  for (let d in data.params)
    query +=
      encodeURIComponent(d) +
      "=" +
      encodeURIComponent(ShelterData.params[d]) +
      "&";
  return query.slice(0, -1);
}

// Json object that should be
// converted to query parameter
queryShelterUrl = encodeQueryShelter(ShelterData);
console.log(queryShelterUrl);

const getShelterData = async (queryShelterUrl) => {
  try {
    const response = await fetch(queryShelterUrl);
    const json = await response.json();
  //  console.log(json);
  } catch (error) {
    console.log(error);
  }
};

//for (const [key, value] of Object.entries(getShelterData(queryShelterUrl))) {
//  console.log(`${key}: ${value}`);
//}

async function createMultipleListings(client, newListings) {
  const result = await client
    .db("shelter_occupancy")
    .collection("capacityAndLocation")
    .insertMany(newListings);

  console.log(
    `${result.insertedCount} new listing created with the following id (s):`
  );

  console.log(result.insertedIds);
}

async function createListing(client, newListing) {
  const result = await client
    .db("shelter_occupancy")
    .collection("capacityAndLocation")
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
