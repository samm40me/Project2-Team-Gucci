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
    
    //await createMultipleListings(client, content);
    //const shelterData = await getShelterData(queryShelterUrl);
    //await createMultipleListings(client, shelterData);
    //console.log(createMultipleListings(client, shelterData));
  //const shelterData = await getShelterData(queryShelterUrl);
  //console.log("this is shelterData", shelterData);
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
    return json
  } catch (error) {
    console.log(error);
  }
};


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
