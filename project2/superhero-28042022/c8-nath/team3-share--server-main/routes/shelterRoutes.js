var express = require("express");
var router = express.Router();
var debug = require("debug")("server:routes");

debug("hello world");

const {getAllShelters, createShelter
} = require("../db/models/shelterModel"); //importing getallsuperheroes into this file

// REading a route: --> the GET for getting ALL superheroes
router.get("/", async (req, res, next) => {
  const listShelters = req.body;
  console.log(listShelters);
  try {
    debug("getting all shelters");
    const listshelters = await getAllShelters(listShelters);
    console.log("server: getallshelters:",shelters)
    res.send(shelters);
  } catch (err) {
    debug(err.message);
  }
});

//  Create a route for the function to create A superhero (createSuperhero in Superheromodel.js)
// Use a post request for the brwoser to send an object
// for express to recieve post request we have to write a POST endpoint rather than a get endpoint
//  the POST for adding ONE superhero
router.post("/", async (req, res) => {
  const newShelter = req.body;
  console.log(newShelter);
  debug(`adding a new shelter: ${newShelter.sheltername}`);
  try {
    const addedShelter = await createShelter(newShelter);
    debug(
      `added new superhero: ${addedShelter.sheltername} with id ${addedShelter._id}`
    );
    res.send(addedShelter); // to send it back to the front
  } catch (err) {
    res.status(500).send("error in data please try again");
    debug(`failed to add new superhero ${newShelter.sheltername}`);
    debug(err.message);
  }
});

// router.post("/shelters", async (req, res) => {
//   const allShelters = req.body;
//   console.log(allShelters);
//   debug(`adding a new allShelters ${allShelters.sheltername}`);
//   try {
//     const addedShelter = await createShelter(allShelters);
//     debug(
//       `added new superhero: ${addedShelter.sheltername} with id ${addedShelter._id}`
//     );
//     res.send(addedShelter); // to send it back to the front
//   } catch (err) {
//     res.status(500).send("error in data please try again");
//     debug(`failed to add new superhero ${allShelters.sheltername}`);
//     debug(err.message);
//   }
// });




// // getting a parameter in and putting them into the params object and get params object out
// // The GET for getting ONE superhero
// router.get("/:id", async (req, res) => {
//   req.params; // {id: '______'}
//   console.log(`LOGGING REQ`, req.params)
//   const id = req.params.id
//   debug(`:id is ${id}`);
//   try {
//     const superhero = await getSuperheroById(id);
//     debug(`superhero is: `, superhero )
//     return res.send(superhero);

//   } catch (ex) {
      
//     debug(`EXCEPTION in superheroes/:id (${id}): `, ex.message);
//     return res.status(500).send(ex.message);
//   }
// });



// router.put('/:id', async(req,res) => {
//   const id = req.params.id
//   const updateData = req.body
//   try{
//     const updatedSuperhero = await updateSuperhero(id, updateData)
//     debug(`router:PUT --- updated superhero with id:: ${updatedSuperhero._id} to ${updatedSuperhero}`)
//     res.send(updatedSuperhero)
//   }catch(err){
//     debug(`routerPOST --- failed to edit superhero: ${updatedSuperhero.name}`)
//     debug(err.message)
//     res.status(500).send("error in data, Please try again.")
//   }
//   }
// )



module.exports = router;
