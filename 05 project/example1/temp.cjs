var request = require("request");

var weatherURL = 'https://api.weather.gc.ca/collections/climate-daily/items?f=json&lang=en-CA&limit=50&CLIMATE_IDENTIFIER=3031094&LOCAL_YEAR=2022&LOCAL_MONTH=1';
var treehouseURL = 'https://data.calgary.ca/resource/7u2t-3wxf.json?date=2021-01-15T00:00:00.000'

var result = [];


function getTreehouseData(error, response, body) {
  if(!error && response.statusCode === 200) {
    result.push({
      treehouse: body
    });
  }

  request(weatherURL, getWeatherData);
}

function getWeatherData(error, response, body) {
  if(!error && response.statusCode === 200) {
    result[0].weather = body;
  }

  console.log(result);
}



//MAIN CALL

request(treehouseURL, getTreehouseData);