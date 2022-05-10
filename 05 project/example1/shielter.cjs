var http = require('http');
var async = require('async');
var request = require('request');


console.log('node.js application starting...');


var svr = http.createServer(function(req, resp) {
  // an example using an object instead of an array
  async.parallel({
    one: function(callback) {
      console.log("One");
      request('https://api.weather.gc.ca/collections/climate-daily/items?f=json&lang=en-CA&limit=50&CLIMATE_IDENTIFIER=3031094&LOCAL_YEAR=2022&LOCAL_MONTH=1', function (error, response, body) {
          if (!error && response.statusCode == 200) {
              callback(null, body);
          } else {
            callback(true, {});
          }
      });
    },
    two: function(callback) {
      console.log("Two");
      request('https://data.calgary.ca/resource/7u2t-3wxf.json?date=2021-01-15T00:00:00.000', function (error, response, body) {
          if (!error && response.statusCode == 200) {
              callback(null, body);
          } else {
            callback(true, {});
          }
      });
    },
  }, function(err, results) {
    // results is now equals to: {one: 1, two: 2}
    resp.writeHead(200, {"Content-Type": "application/json"});
    console.log(results.json());
    resp.end(JSON);
  });
});


svr.listen(9000, function() {
  console.log('Node HTTP server is listening');
});
