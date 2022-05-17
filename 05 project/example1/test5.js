const fetch = require("node-fetch");
//import fetch from "node-fetch";
const { createInterface } = require("readline");
const { PassThrough } = require("stream");

//const url = "https://data.calgary.ca/resource/7u2t-3wxf.json?date=2021-01-15T00:00:00.000";

let data;
let queryUrl;

data = {
  url: "https://api.weather.gc.ca/collections/climate-daily/items?",
  params: {
    //    properties: "[Object]",
    LOCAL_YEAR: "2022",
    LOCAL_MONTH: "1",
    //    MIN_TEMPERATURE: "-35.4",
    //    MEAN_TEMPERATURE: "-29.9",
  },
};
//<script>
function encodeQuery(data) {
  let query = data.url;
  for (let d in data.params)
    query +=
      encodeURIComponent(d) + "=" + encodeURIComponent(data.params[d]) + "&";
  return query.slice(0, -1);
}

// Json object that should be
// converted to query parameter
queryUrl = encodeQuery(data);
console.log(queryUrl);
let json;
const getShelterData = async (queryUrl) => {
  try {
    const response = await fetch(queryUrl);
      const data = await response.json();
      var tempString = JSON.stringify(data);
      var tempData = JSON.parse(tempString);
      var featuresArray = tempData["features"]
    for (const [key, value] of Object.entries(featuresArray)) {
      console.log(`${key}: ${value}`);
    }
  } catch (error) {
    console.log(error);
  }
};
getShelterData(queryUrl);

