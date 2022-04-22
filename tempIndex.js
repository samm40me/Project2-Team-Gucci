const fetch = require("node-fetch");
const express = require("express");


let TempData;
let queryTemUrl;

TempData = {
  url: "https://api.weather.gc.ca/collections/climate-daily/items?f=json&lang=en-CA&limit=50&",
  params: {
    //    properties: "[Object]",
    CLIMATE_IDENTIFIER: "3031094",
    LOCAL_YEAR: "2021",
    //  LOCAL_MONTH: "1",
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
//console.log(queryTemUrl);

const getTempData = async (queryTemUrl) => {
  const response = await fetch(queryTemUrl);
  const data = await response.json();
  return data
    const featuresArray = data.features;
    return featuresArray
  console.log(featuresArray);
  //   // console.log(featuresArray[1].properties);

  //featuresArray.forEach(loopThroughFunction);

  //function loopThroughFunction(featuresArray) {
  //  const dataFields = featuresArray.properties;
    //return dataFields;
    //console.log(index)

    //if (dataFields.MIN_TEMPERATURE < -30) {
    //   console.log(`ItemID number is: `, dataFields.ID);
    //console.log(
    //    `Index:` + index + `    min temp is:`,
    //                    dataFields.MIN_TEMPERATURE
    //);
    //console.log("On :" + dataFields.LOCAL_YEAR + "-" + dataFields.LOCAL_MONTH + "-" + dataFields.LOCAL_DAY);
    //}
    //}
    
};
//getTempData(queryTemUrl);
getTempData(queryTemUrl);



module.exports = { getTempData, queryTemUrl};