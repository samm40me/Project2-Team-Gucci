//const fetch = require("node-fetch");
import fetch from 'node-fetch'

const url = "https://data.calgary.ca/resource/7u2t-3wxf.json?date=2021-01-15T00:00:00.000";


const get_data = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

get_data(url);
