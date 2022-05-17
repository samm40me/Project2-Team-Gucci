const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
{
    type: String,
    features: [
        {
            type: String,
            "geometry": {
                "coordinates": [
                    -114.00029722222222,
                    51.10944722222222
                ],
                "type": "Point"
            },
            "properties": {
                "STATION_NAME": "CALGARY INT'L CS",
                "CLIMATE_IDENTIFIER": "3031094",
                "ID": "3031094.2021.1.1",
                "LOCAL_DATE": "2021-01-01 00:00:00",
                "PROVINCE_CODE": "AB",
                "LOCAL_YEAR": 2021,
                "LOCAL_MONTH": 1,
                "LOCAL_DAY": 1,
                "MEAN_TEMPERATURE": -0.9,
                "MEAN_TEMPERATURE_FLAG": null,
                "MIN_TEMPERATURE": -5,
                "MIN_TEMPERATURE_FLAG": null,
                "MAX_TEMPERATURE": 3.2,
                "MAX_TEMPERATURE_FLAG": null,
                "TOTAL_PRECIPITATION": 0,
                "TOTAL_PRECIPITATION_FLAG": null,
                "TOTAL_RAIN": null,
                "TOTAL_RAIN_FLAG": null,
                "TOTAL_SNOW": null,
                "TOTAL_SNOW_FLAG": null,
                "SNOW_ON_GROUND": 8,
                "SNOW_ON_GROUND_FLAG": null,
                "DIRECTION_MAX_GUST": 29,
                "DIRECTION_MAX_GUST_FLAG": null,
                "SPEED_MAX_GUST": 44,
                "SPEED_MAX_GUST_FLAG": null,
                "COOLING_DEGREE_DAYS": 0,
                "COOLING_DEGREE_DAYS_FLAG": null,
                "HEATING_DEGREE_DAYS": 18.9,
                "HEATING_DEGREE_DAYS_FLAG": null,
                "MIN_REL_HUMIDITY": 44,
                "MIN_REL_HUMIDITY_FLAG": null,
                "MAX_REL_HUMIDITY": 73,
                "MAX_REL_HUMIDITY_FLAG": null
            }
        },
})

module.exports = mongoose.model('Movie', movieSchema)