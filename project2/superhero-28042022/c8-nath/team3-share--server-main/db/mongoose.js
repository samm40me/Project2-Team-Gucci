const mongoose = require("mongoose");
const debug = require('debug')('server:mongoose')
require("dotenv").config(); // to read connection string from env file

const connectionString = "mongodb://localhost:27017/mongoose-test";



  mongoose.connect(connectionString, () => {
      debug(`Connected to mongoose on ${connectionString}`)
  })


module.exports = mongoose