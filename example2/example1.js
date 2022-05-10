const url = 'https://data.calgary.ca/resource/7u2t-3wxf.json?date=2021-01-15T00:00:00.000';
const fetchData = function(endpoint){
    const data = fetch(url)
//    const response = fetch(endpoint);
    const data = await response.json();
}
const data = fetchData(url)
console.log()