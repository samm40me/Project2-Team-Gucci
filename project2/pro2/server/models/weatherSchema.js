const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
                LOCAL_DATE: { type: String },
                LOCAL_YEAR: { type: Number },
                LOCAL_MONTH: { type: Number},
                LOCAL_DAY: { type: Number },
                MIN_TEMPERATURE: { type: Number },
                MAX_TEMPERATURE: { type: Number },
                TOTAL_PRECIPITATION: { type: Number },
                TOTAL_RAIN: { type: Number},
                TOTAL_SNOW: { type: String },
                SNOW_ON_GROUND: { type: Number },

});

const Weather = mongoose.model("Weather", weatherSchema);
export default Weather;