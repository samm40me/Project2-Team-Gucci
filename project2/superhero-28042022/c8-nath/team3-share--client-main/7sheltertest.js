import fetch from "node-fetch";

const url = "https://data.calgary.ca/resource/7u2t-3wxf.json";

const get_data = async (url) => {
  try {
    const response = await fetch(url);
    const shelterData = await response.json();
    //shelterData is an array
    // console.log(shelterData)
    console.log(`ONE instance of shelter data:` , shelterData[0])

// stringify JSON Object
var jsonContent = JSON.stringify(shelterData);
console.log(jsonContent);


  } catch (error) {
    console.log(error);
  }
};

get_data(url);

