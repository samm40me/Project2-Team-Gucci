// Importing required packages
//let express = require('express');
//let mongoose = require('mongoose');
//let cors = require('cors');
//let bodyParser = require('body-parser');
var async = require("async");
var request = require("request");
import fetch from "node-fetch";

// Shelter Data
const url_1 =
  "https://data.calgary.ca/resource/7u2t-3wxf.json?date=2021-01-15T00:00:00.000";

// Temperature Data
const url_2 = "https://www.theweathernetwork.com/ca/monthly/alberta/calgary";

const getShelterData = async (url_1) => {
  try {
    const response = await fetch(url_1);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
getShelterData(url_1);

const getTempData = async (url_2) => {
  try {
    const response = await fetch(url_2);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
getTempData(url_2);
