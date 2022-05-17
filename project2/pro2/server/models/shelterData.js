const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const express = require("express");

let url = "https://data.calgary.ca/resource/7u2t-3wxf.json?"
  // Json object that should be
  // converted to query parameter
  //console.log(queryShelterUrl);

  async function getShelterData(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      //    console.log(json);
      return json;
    } catch (error) {
      console.log(error);
    }
  };
console.log(getShelterData(url));

module.exports = { getShelterData, url };
