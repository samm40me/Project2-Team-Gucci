const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");
const express = require("express");
const { getTempData, queryTemUrl } = require("../tempIndex");
const temJSON = require("./temp.json");
var tempString = JSON.stringify(temJSON);
var tempData = JSON.parse(tempString);
//var featuresArray = tempData["features"];

//console.log(tempData);

//console.log(result);

//tempData.forEach((nested) => {
//  nested.features.forEach((menu) => (menu.status = nested.status));
//  delete nested.status;
//});
//console.log(arr);

let sheltertype;
let MIN_TEMPERATURE;
//let MIN_TEMPERATURE;

// Connect to MongDB
const url =
  "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function readOneTempData() {
  try {
    await client.connect();
    const database = client.db("shelter_occupancy");
    const temperatures = database.collection("MinAndMaxTemperature");
    // query for movies that have a runtime less than 15 minutes
    const query = { "MIN_TEMPERATURE": "-17.5" };

  //  const options = {
      // sort returned documents in ascending order by title (A->Z)
      //      sort: { id: 1 },
      // Include only the `title` and `imdb` fields in each returned document
  //    projection: { id: 0, properties: 1, MIN_TEMPERATURE: 1 },
  //  };
    const cursor = temperatures.find(query);
    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }
    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
readOneTempData().catch(console.dir);

module.exports = { readOneTempData };
