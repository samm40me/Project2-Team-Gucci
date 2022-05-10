//const fetch = require("node-fetch");
//import fetch from "node-fetch";
const fetch = require("node-fetch");

const url =
  "https://api.weather.gc.ca/collections/climate-daily/items?f=json&lang=en-CA&limit=50&CLIMATE_IDENTIFIER=3031094&LOCAL_YEAR=2022&LOCAL_MONTH=1";

const get_data = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.features[2]);
  } catch (error) {
    console.log(error);
  }
};

get_data(url);

