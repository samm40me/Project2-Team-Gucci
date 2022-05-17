import {tempInfo, shelterInfo} from ("./schema/schema");
import { createShelterData } from "./models/shelterSchema.js";

const loadInitialData = async () => {
    try {
      console.log(`creating superhero ${shelter.sheltertype}`);
      const newShelter = await createShelterData(shelter);
      console.log(
        `created shelter ${newShelter.sheltertype}`
      );
    } catch (err) {
      console.log(`error creating superhero ${shelter.sheltertype}`);
      console.log(err.message);
    }
  }
console.log("finished loading initial data");
  
loadInitialData();
