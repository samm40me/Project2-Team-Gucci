var express = require("express");
var router = express.Router();
var debug = require("debug")("server:routes");
const {
  createShelterData
} = require("../db/loadInitialShelterData");

const {
  readShelterData
} = require("../db/readShelterData");

const { deleteShelterData } = require("../db/deleteShelterData");

router.get("/", async (req, res) => {
  try {
    debug("getting all shelters");
    const shelters = await readShelterData(req, res);
    res.send(shelters);
  } catch (err) {
    debug(err.message);
  }
});

router.post("/", async (req, res) => {
  const newShelter = req.body;
  debug(`adding new shelter: ${newShelter.sheltertype}`);
  try {
    const addedShelter = await createShelterData(newShelter);
    debug(
      `added new shelter: ${addedShelter.sheltertype} with _id ${addedShelter._id}`
    );
    res.send(addedShelter);
  } catch (err) {
    debug(`failed to add new shelter: ${newShelter.sheltertype}`);
    debug(err.message);
  }
});

router.delete("/", async (req, res) => {
  try {
    debug("deleting all shelters");
    const shelters = await deleteShelterData(req, res);
    res.send(shelters);
  } catch (err) {
    debug(err.message);
  }
});

module.exports = router;
