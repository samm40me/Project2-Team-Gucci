// Sample arrow function calling 3rd party API
// Assumes axios is your HTTP client
//import "regenerator-runtime/runtime";
//const axios = require("axios").default;
const axios = require("axios");

const api1 = async (searchRec) => {
    return new Promise((resolve, reject) => {
      let searchUrl = 'https://coolapi.com'
      return axios({
        url: searchUrl, // Endpoint
        data: searchRec, // Params
        timeout: 10000, // e.g. 10s
        method: 'POST'
      }).then((response) => {
         resolve(response.data);  // return results
      }).catch((error) => {
         resolve(null);
      });
    });
  }
  
  const api2 = (searchRec) => {
    // Similar to api1
  }
  
  // sample search criteria
  let searchRec = {
    destId: 'Seattle',
    categoryId: 47,
    sortOrder: 'POPULAR'
  }
  
  // Kick off each call simultaneously
  let promise1 = api1 (searchRec);
  let promise2 = api2 (searchRec);
  
  // Gather results
  let [results1, results2] = await Promise.all([promise1, promise2]);
  
  // Extract best results for user
  // ...