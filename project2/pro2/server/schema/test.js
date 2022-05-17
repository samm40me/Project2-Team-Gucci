const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

//  ---------------Get shelter data
const getShelterData = async () => {
  const shelterurl = "https://data.calgary.ca/resource/7u2t-3wxf.json";

  try {
    const response = await fetch(shelterurl);
    const allShelterData = await response.json();
    //shelterData is an array
    // console.log(allShelterData)
    console.log(`ONE instance of shelter data:`, allShelterData[0]);
    return allShelterData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getShelterData };
