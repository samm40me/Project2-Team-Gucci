const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");
const express = require("express");
const fs = require("fs");

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/drivers/node/ for more details
   */
  const uri =
    "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  /**
   * The Mongo Client you will use to interact with your database
   * See https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html for more details
   */
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Create 3 new listings
    await createMultipleListings(client, jsonContent);

  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

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
//    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

var content = getShelterData(queryShelterUrl);
var jsonObj = JSON.parse(content);

// stringify JSON Object
var jsonContent = JSON.stringify(jsonObj);


fs.writeFile("output.json", jsonContent, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});

/**
 * Create a new Airbnb listing
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {Object} newListing The new listing to be added
 */
async function createListing(client, newListing) {
  // See https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#insertOne for the insertOne() docs
  const result = await client
    .db("shelter_occupancy")
    .collection("LocationAndCapacity")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

/**
 * Create multiple Airbnb listings
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {Object[]} newListings The new listings to be added
 */
async function createMultipleListings(client, newListings) {
  // See https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#insertMany for the insertMany() docs
  const result = await client
    .db("shelter_occupancy")
    .collection("LocationAndCapacity")
    .insertMany(newListings);

  console.log(
    `${result.insertedCount} new listing(s) created with the following id(s):`
  );
  console.log(result.insertedIds);
}
