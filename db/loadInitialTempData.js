const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");
const express = require("express");
const { getTempData, queryTemUrl } = require("../tempIndex");
const { json } = require("express");

// Connect to MongDB
async function main() {
  const url =
    "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(url);

  try {
    await client.connect();
///    await createListing(client, 
//      {
//        id: "3031094.2021.7.13",
//        type: "Feature",
//        geometry: {
//          coordinates: [-114.00029722222222, 51.10944722222222],
//          type: "Point",
//        },
//        properties: {
//          STATION_NAME: "CALGARY INT'L CS",
//          CLIMATE_IDENTIFIER: "3031094",
//          ID: "3031094.2021.7.13",
//          LOCAL_DATE: "2021-07-13 00:00:00",
//          PROVINCE_CODE: "AB",
//          LOCAL_YEAR: 2021,
//          LOCAL_MONTH: 7,
//          LOCAL_DAY: 13,
//          MEAN_TEMPERATURE: 19.5,
//          MEAN_TEMPERATURE_FLAG: null,
//          MIN_TEMPERATURE: 11.9,
//          MIN_TEMPERATURE_FLAG: null,
//          MAX_TEMPERATURE: 27.1,
//          MAX_TEMPERATURE_FLAG: null,
//          TOTAL_PRECIPITATION: 0,
//          TOTAL_PRECIPITATION_FLAG: null,
//          TOTAL_RAIN: null,
//          TOTAL_RAIN_FLAG: null,
//          TOTAL_SNOW: null,
//          TOTAL_SNOW_FLAG: null,
//          SNOW_ON_GROUND: null,
//          SNOW_ON_GROUND_FLAG: null,
//          DIRECTION_MAX_GUST: 13,
//          DIRECTION_MAX_GUST_FLAG: null,
//          SPEED_MAX_GUST: 33,
//         SPEED_MAX_GUST_FLAG: null,
//          COOLING_DEGREE_DAYS: 1.5,
//          COOLING_DEGREE_DAYS_FLAG: null,
//          HEATING_DEGREE_DAYS: 0,
//          HEATING_DEGREE_DAYS_FLAG: null,
//          MIN_REL_HUMIDITY: 34,
//          MIN_REL_HUMIDITY_FLAG: null,
//          MAX_REL_HUMIDITY: 85,
//          MAX_REL_HUMIDITY_FLAG: null,
//        },
//      }
//    );

    const TempData = await getTempData(queryTemUrl);
    console.log("this is temperature Data", TempData);
    await createMultipleListings(client, TempData);

    //[getShelterData(queryShelterUrl)]);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

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
