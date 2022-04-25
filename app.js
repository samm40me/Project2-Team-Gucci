const express = require("express");
const logger = require("morgan");

const shelterRouter = require("./routes/shelterRoutes");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/shelter", shelterRouter);

module.exports = app;
