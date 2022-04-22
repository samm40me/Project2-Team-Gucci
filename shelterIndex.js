const fetch = require("node-fetch");
const express = require("express");

let ShelterData;
let queryShelterUrl;

ShelterData = {
  url: "https://data.calgary.ca/resource/7u2t-3wxf.json?",
  params: {
    date: "2021-01-14T00:00:00.000",
  },
};
//<script>
function encodeQueryShelter(ShelterData) {
  let query = ShelterData.url;
  for (let d in ShelterData.params)
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
//console.log(queryShelterUrl);

const getShelterData = async (queryShelterUrl) => {
  try {
    const response = await fetch(queryShelterUrl);
    const json = await response.json();
    //    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getShelterData, queryShelterUrl };

