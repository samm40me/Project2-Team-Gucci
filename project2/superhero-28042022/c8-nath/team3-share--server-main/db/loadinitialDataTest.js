
const initialData = require("./superheroes.json");
const { createSuperhero } = require("./models/superheroModel");




console.log('loading initial data file', initialData)
console.log(`this is a test`)
// Function to load intitial data
const loadInitialData = async () => {
  for (let i = 0; i < initialData.length; i++) {
    const superhero = initialData[i];
    try {
      console.log(`creating superhero ${superhero.name}`);
      const newSuperhero = await createSuperhero(superhero);
      console.log(
        `created superhero ${newSuperhero.name} with id ${newSuperhero._id}`
      );
    } catch (err) {
        console.log(`error creating superhero ${superhero.name}`);
        console.log(err.message);
    }
  }
  console.log("finished loading initial data");
  process.exit()
};
loadInitialData();