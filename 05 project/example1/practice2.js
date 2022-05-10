//const fetch = require("node-fetch");
const fetch = require("node-fetch");

//const url = "https://data.calgary.ca/resource/7u2t-3wxf.json?date=2021-01-15T00:00:00.000";


let data;
let data1;
let queryUrl;
let sheltertype;

data = {
  url: "https://data.calgary.ca/resource/7u2t-3wxf.json?",
  params: {
    date: "2021-01-14T00:00:00.000",
  },
};
//<script>
function encodeQuery(data) {
  let query = data.url;
  for (let d in data.params)
    query +=
      encodeURIComponent(d) + "=" + encodeURIComponent(data.params[d]) + "&";
  return query.slice(0, -1);
}

// Json object that should be
// converted to query parameter
queryUrl = encodeQuery(data);
console.log(queryUrl);


const getShelterData = async queryUrl => {
  try {
    const response = await fetch(queryUrl);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

//data1 = getShelterData(queryUrl);

//Object.keys(data1).forEach((key) => {
//  console.log(data1[key]); // 'Bob', 47
//});
for (const [key, value] of Object.entries(getShelterData(queryUrl))) {
  console.log(`${key}: ${value}`);
}
//var arr = [];
//for (var i in getShelterData(queryUrl)) {
//  if (typeof getShelterData(queryUrl)[i] === "object") {
//    arr.push(getShelterData(queryUrl)[i]);
//  }
//}
//console.log(arr);
