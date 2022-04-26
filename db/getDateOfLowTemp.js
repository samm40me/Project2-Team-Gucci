const fetch = require("node-fetch");
const express = require("express");


TempData = {
  url: "https://api.weather.gc.ca/collections/climate-daily/items?f=json&lang=en-CA&limit=50&",
  params: {

    CLIMATE_IDENTIFIER: "3031094",
    LOCAL_YEAR: "2021",
//    LOCAL_MONTH: "1",

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
console.log(queryTemUrl);

const getDatesForTemp = async (queryTemUrl) => {
  const response = await fetch(queryTemUrl);
  const data = await response.json();
  const featuresArray = data.features;

  featuresArray.forEach(loopThroughFunction);

  function loopThroughFunction(featuresArray) {
    const dataFields = featuresArray.properties;
//    console.log(index);

    if (dataFields.MIN_TEMPERATURE < -30) {
  
      console.log(
        `min temp is:,
        ${dataFields.MIN_TEMPERATURE} on: ${dataFields.LOCAL_DATE}`
      );
    }
  }
};
getDatesForTemp(queryTemUrl);

module.exports = { getDatesForTemp };