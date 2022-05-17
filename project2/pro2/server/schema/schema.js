const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const graphql = require("graphql");
const Shelter = require("../models/shelterSchema")
const Weather = require("../models/weatherSchema");

import getTempData from "../models/weatherData"


const { json } = require("express");
const temJSON = require("./temp.json");
//const shelterJSON = require("./shelters.json");
const { getShelterData } = require("./test");



//import temperature data
const tempString = JSON.stringify(temJSON);
const tempData = JSON.parse(tempString);
const tempArray = tempData["features"];

//import shelter data
//const shelterString = JSON.stringify(shelterJSON);
//const shelterData = JSON.parse(shelterString);
//console.log(shelterData)


async function createShelterData() {
  try {

      const shelterData = await getShelterData();
//    console.log("this is shelterData", shelterData);
//      return shelterData;

//[getShelterData(queryShelterUrl)]);
  } catch (err) {
    console.error(err);
  } finally {
    console.log('Shelter Data');
    }
}

shelterInfo = createShelterData();
//console.log(shelterInfo);

async function createTempData() {
  try {
    const tempData = await getTempData();
    //    console.log("this is shelterData", shelterData);
    //      return shelterData;

    //[getShelterData(queryShelterUrl)]);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("temp Data");
  }
}

tempInfo = createTempData();



const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLID,
  GraphQLArray,
  GraphQLSchema,
} = graphql;

const ShelterCapacity = new GraphQLObjectType({
  name: "Shelter",
  fields: () => ({
    date: { type: GraphQLString },
    year: { type: GraphQLString },
    month: { type: GraphQLString },
    city: { type: GraphQLString },
    sheltertype: { type: GraphQLString },
    sheltername: { type: GraphQLString },
    organization: { type: GraphQLString },
    shelter: { type: GraphQLString },
    capacity: { type: GraphQLInt },
    overnight: { type: GraphQLInt },
  }),
});

const CalgaryWeather = new GraphQLObjectType({
  name: "Temperature",
  fields: () => ({
    STATION_NAME: { type: GraphQLString },
    CLIMATE_IDENTIFIER: { type: GraphQLString },
    ID: { type: GraphQLString },
    LOCAL_DATE: { type: GraphQLString },
    PROVINCE_CODE: { type: GraphQLString },
    LOCAL_YEAR: { type: GraphQLInt },
    LOCAL_MONTH: { type: GraphQLInt },
    LOCAL_DAY: { type: GraphQLInt },
    MEAN_TEMPERATURE: { type: GraphQLFloat },
    MEAN_TEMPERATURE_FLAG: { type: GraphQLString },
    MIN_TEMPERATURE: { type: GraphQLInt },
    MIN_TEMPERATURE_FLAG: { type: GraphQLString },
    MAX_TEMPERATURE: { type: GraphQLFloat },
    MAX_TEMPERATURE_FLAG: { type: GraphQLString },
    TOTAL_PRECIPITATION: { type: GraphQLInt },
    TOTAL_PRECIPITATION_FLAG: { type: GraphQLString },
    TOTAL_RAIN: { type: GraphQLString },
    TOTAL_RAIN_FLAG: { type: GraphQLString },
    TOTAL_SNOW: { type: GraphQLString },
    TOTAL_SNOW_FLAG: { type: GraphQLString },
    SNOW_ON_GROUND: { type: GraphQLInt },
    SNOW_ON_GROUND_FLAG: { type: GraphQLString },
    DIRECTION_MAX_GUST: { type: GraphQLInt },
    DIRECTION_MAX_GUST_FLAG: { type: GraphQLString },
    SPEED_MAX_GUST: { type: GraphQLInt },
    SPEED_MAX_GUST_FLAG: { type: GraphQLString },
    COOLING_DEGREE_DAYS: { type: GraphQLInt },
    COOLING_DEGREE_DAYS_FLAG: { type: GraphQLString },
    HEATING_DEGREE_DAYS: { type: GraphQLFloat },
    HEATING_DEGREE_DAYS_FLAG: { type: GraphQLString },
    MIN_REL_HUMIDITY: { type: GraphQLInt },
    MIN_REL_HUMIDITY_FLAG: { type: GraphQLString },
    MAX_REL_HUMIDITY: { type: GraphQLInt },
    MAX_REL_HUMIDITY_FLAG: { type: GraphQLString },
  }),
});
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    shelter: {
      type: ShelterCapacity,
      args: {
        shelter: { type: GraphQLString },
        capacity: { type: GraphQLInt },
        overnight: { type: GraphQLInt },
      },
      resolve(parent, args) {
        //get data from database
        console.log(typeof args.shelter);
        return _.find(shelterInfo, { shelter: args.shelter });
      },
    },
    temperature: {
      type: CalgaryWeather,
      args: {
        ID: { type: GraphQLID },
        LOCAL_DATE: { type: GraphQLString },
        MIN_TEMPERATURE: { type: GraphQLFloat },
        MAX_TEMPERATURE: { type: GraphQLFloat },
        TOTAL_RAIN: { type: GraphQLString },
        TOTAL_SNOW: { type: GraphQLString },
      },
      resolve(parent, args) {
        return _.find(tempArray, { MIN_TEMPERATURE: args.MIN_TEMPERATURE });
      },
    },
  }),
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  shelterInfo, tempInfo,
});