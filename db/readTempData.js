const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");
const express = require("express");
const {
  getTempData,
  queryTemUrl,
} = require("../tempIndex");
const temJSON = require("./temp.json");
//var tempString = JSON.stringify(temJSON)
//var tempData = JSON.parse(tempString)
//var featuresArray = tempData["features"]
//var propertiesJSON = JSON.stringify(featuresArray)
//var propertiesArray = JSON.parse(propertiesJSON)
//var propertiesData = propertiesArray["properties"]
var temData = JSON.parse(temJSON)
//var tempDataV = temData.features
//var dataFields = temData.properties
    function temObj(temData) {
        for(var k in temData) {
            if(temData[k] instanceof Object) {
                 return (temData[k]);
            } else {
                console.log(temData[k]);
            };
        }
    };

console.log(temObj(temData));



let sheltertype;
//let MIN_TEMPERATURE;

// Connect to MongDB
async function readTempData() {
  const url =
    "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(url);

  try {
    await client.connect();

    
    await findRecords(client, -10);

    //[getShelterData(queryShelterUrl)]);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
readTempData().catch(console.error);

async function findRecords(client, name) {
  const result = await client
    .db("shelter_occupancy")
    .collection("MinAndMaxTemperature")
    .findOne({ name: MIN_TEMPERATURE });
  if (result) {
    console.log(`Found a listing in the collection with the name '${name}':`);
    console.log(result);
  } else {
    console.log(`No listings found with the name '${name}'`);
  }
}

module.exports = { readTempData, findRecords };
