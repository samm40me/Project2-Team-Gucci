var express = require("express");
var router = express.Router();
var debug = require("debug")("server:routes");
const { getAllShelters, createShelters } = require("../db/models/shelterModel");

router.get("/", async (req, res) => {
  try {
    debug("getting all shelters");
    const shelters = await getAllShelters(req, res);
    res.send(shelters);
  } catch (err) {
    debug(err.message);
  }
});

router.post("/", async (req, res) => {
  const newShelter = req.body;
  debug(`adding new shelter: ${newShelter.sheltertype}`);
  try {
    const addedShelter = await createShelters(newShelter);
    debug(
      `added new shelter: ${addedShelter.sheltertype} with _id ${addedShelter._id}`
    );
    res.send(addedShelter);
  } catch (err) {
    debug(`failed to add new shelter: ${newShelter.sheltertype}`);
    debug(err.message);
  }
});

module.exports = router;
