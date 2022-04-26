var express = require("express");
var router = express.Router();
var debug = require("debug")("server:routes");
const { getDatesForTemp } = require("../db/getDateOfLowTemp");
const { loadTempData } = require("../db/loadInitialTempData");
const { deleteTempData } = require("../db/deleteTempData");
const { readOneTempData } = require("../db/readOneTempData");

router.get("/", async (req, res) => {
  try {
    debug("getting all temperatures");
    const temperatures = await getDatesForTemp(req, res);
    res.send(temperatures);
  } catch (err) {
    debug(err.message);
  }
});

router.post("/", async (req, res) => {
  const newTemperatures = req.body;
  debug(`adding new temperature: ${newShelter.MIN_TEMPERATURE}`);
  try {
    const addedTemperature = await loadTempData(newTemperatures);
    debug(
      `added new temperature: ${addedTemperature.MIN_TEMPERATURE} with _id ${addedMIN_TEMPERATURE._id}`
    );
    res.send(addedTemperature);
  } catch (err) {
    debug(`failed to add new temperature: ${newTemperatures.MIN_TEMPERATURE} with _id ${newTemperatures}`);
    debug(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    debug("getting all get one temperature");
    const temps = await readOneTempData(req, res);
    res.send(temps);
  } catch (err) {
    debug(err.message);
  }
});

router.delete("/", async (req, res) => {
  try {
    debug("deleting all temperatures");
    const temperatures = await deleteTempData(req, res);
    res.send(temperatures);
  } catch (err) {
    debug(err.message);
  }
});

module.exports = router;
