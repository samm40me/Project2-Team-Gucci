
const express = require('express');
const logger = require('morgan');

const superheroRouter = require('./routes/superheroRoutes');
const shelterRouter = require('./routes/shelterRoutes');

// this is my app
const app = express();


app.use(logger('dev'));
app.use(express.json()); // allowing the server to recieve json
app.use(express.urlencoded({ extended: false })); // to process returns


// app.use('/superheroes', superheroRouter);


app.use('/shelters', shelterRouter)

 
module.exports = app;
