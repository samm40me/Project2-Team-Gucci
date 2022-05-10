let data;
let queryParam;

data = {
    url : 'www.geeksforgeeks.com/',
    params : {
        'website':'Sam',
        'location':'Calgary'
    }
}
//<script>
function encodeQuery(data){
	let query = data.url
	for (let d in data.params)
		query += encodeURIComponent(d) + '='
			+ encodeURIComponent(data.params[d]) + '&';
	return query.slice(0, -1)
}

// Json object that should be
// converted to query parameter
queryParam = encodeQuery(data)
console.log(queryParam)
//</script>
