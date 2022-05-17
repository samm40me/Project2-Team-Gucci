var express = require("express");
var router = express.Router();
var debug = require("debug")("server:routes");

debug("hello world");

const {
  getAllSuperheroes,
  createSuperhero,
  getSuperheroById,
  updateSuperhero,
} = require("../db/models/superheroModel"); //importing getallsuperheroes into this file

// REading a route: --> the GET for getting ALL superheroes
router.get("/", async (req, res, next) => {
  try {
    debug("getting all superheroes");
    const superheroes = await getAllSuperheroes();
    res.send(superheroes);
  } catch (err) {
    debug(err.message);
  }
});

//  Create a route for the function to create A superhero (createSuperhero in Superheromodel.js)
// Use a post request for the brwoser to send an object
// for express to recieve post request we have to write a POST endpoint rather than a get endpoint
//  the POST for adding ONE superhero
router.post("/suHome", async (req, res) => {
  const newSuperhero = req.body;
  console.log(newSuperhero);
  debug(`adding a new superhero: ${newSuperhero.name}`);
  try {
    const addedSuperhero = await createSuperhero(newSuperhero);
    debug(
      `added new superhero: ${addedSuperhero.name} with id ${addedSuperhero._id}`
    );
    res.send(addedSuperhero); // to send it back to the front
  } catch (err) {
    res.status(500).send("error in data please try again");
    debug(`failed to add new superhero ${newSuperhero.name}`);
    debug(err.message);
  }
});

// getting a parameter in and putting them into the params object and get params object out
// The GET for getting ONE superhero
router.get("/:id", async (req, res) => {
  req.params; // {id: '______'}
  console.log(`LOGGING REQ`, req.params)
  const id = req.params.id
  debug(`:id is ${id}`);
  try {
    const superhero = await getSuperheroById(id);
    debug(`superhero is: `, superhero )
    return res.send(superhero);

  } catch (ex) {
      
    debug(`EXCEPTION in superheroes/:id (${id}): `, ex.message);
    return res.status(500).send(ex.message);
  }
});



router.put('/:id', async(req,res) => {
  const id = req.params.id
  const updateData = req.body
  try{
    const updatedSuperhero = await updateSuperhero(id, updateData)
    debug(`router:PUT --- updated superhero with id:: ${updatedSuperhero._id} to ${updatedSuperhero}`)
    res.send(updatedSuperhero)
  }catch(err){
    debug(`routerPOST --- failed to edit superhero: ${updatedSuperhero.name}`)
    debug(err.message)
    res.status(500).send("error in data, Please try again.")
  }
  }
)



module.exports = router;
