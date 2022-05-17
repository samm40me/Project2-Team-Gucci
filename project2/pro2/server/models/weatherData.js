const fetch = (...args) =>
import("node-fetch").then(({ default: fetch }) => fetch(...args));
const express = require("express");

let url;


async function getTempData(url) {
url =
  "https://api.weather.gc.ca/collections/climate-daily/items?f=json&lang=en-CA&limit=50&CLIMATE_IDENTIFIER=3031094";
    try {
      const response = await fetch(url);
      const data = await response.json();
//      return data;
    } catch (err) {
      alert(err.message);
    }
  };

module.exports = { getTempData };
