//const fetch = require("node-fetch");
//import fetch from "node-fetch";
//const { createInterface } = require("readline");
//const { PassThrough } = require("stream");
//const express = require("express");
//const connectDB = require("./config/db");
var async = require("express-async-await");
var fetch = require("node-fetch");

//const app = express();

//Connect Database
//connectDB();

//app.get("/", (req, res) => res.send("Hello world!"));

//const port = process.env.PORT || 8082;

//app.listen(port, () => console.log(`Server running on port ${port}`));

let ShelterData;
let queryShelterUrl;
let TempData;
let queryTemUrl;

TempData = {
  url: "https://api.weather.gc.ca/collections/climate-daily/items?f=json&lang=en-CA&limit=50&",
  params: {
    //    properties: "[Object]",
    CLIMATE_IDENTIFIER: "3031094",
    LOCAL_YEAR: "2022",
    LOCAL_MONTH: "1",
    //    MIN_TEMPERATURE: "-35.4",
    //    MEAN_TEMPERATURE: "-29.9",
  },
};
//<script>
function encodeQueryTemp(TempData) {
  let query = TempData.url;
  for (let d in TempData.params)
    query +=
      encodeURIComponent(d) +
      "=" +
      encodeURIComponent(TempData.params[d]) +
      "&";
  return query.slice(0, -1);
}

// Json object that should be
// converted to query parameter
queryTemUrl = encodeQueryTemp(TempData);
console.log(queryTemUrl);

const getTempData = async (queryTemUrl) => {
  try {
    const response = await fetch(queryTemUrl);
    const json = await response.json();
    console.log(json.features[2].properties.MIN_TEMPERATURE);
    return json.features[2].properties.MIN_TEMPERATURE;
  } catch (error) {
    console.log(error);
  }
};

console.log(getTempData(queryTemUrl));

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
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
};
