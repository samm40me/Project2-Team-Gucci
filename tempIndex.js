const fetch = require("node-fetch");
const express = require("express");


let TempData;
let queryTemUrl;

TempData = {
  url: "https://api.weather.gc.ca/collections/climate-daily/items?f=json&lang=en-CA&limit=50&",
  params: {
    CLIMATE_IDENTIFIER: "3031094",
    LOCAL_YEAR: "2021",
    //  LOCAL_MONTH: "1",cd main

  },
};

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

queryTemUrl = encodeQueryTemp(TempData);

const getTempData = async (queryTemUrl) => {
  const response = await fetch(queryTemUrl);
  const data = await response.json();
  return data
    const featuresArray = data.features;
    return featuresArray
  console.log(featuresArray);

};

getTempData(queryTemUrl);



module.exports = { getTempData, queryTemUrl};