const fetch = require("node-fetch");
const express = require("express");

exports = function (payload) {
  const httpService = context.services.get("http");
  var weatherApiInfo = context.values.get("weatherApiInfo");
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${weatherApiInfo.city}&units=metric&appid=${weatherApiInfo.appId}`;
  console.log("Fetching " + url);
  return httpService.get({ url: url }).then((response) => {
    let json = JSON.parse(response.body.text());
    json.observationDate = new Date(json.dt * 1000);

    var collection = context.services
      .get("mongodb-atlas")
      .db("weather")
      .collection("observations");
    collection.insertOne(json);
    console.log("Inserted document!");
  });
};
exports()