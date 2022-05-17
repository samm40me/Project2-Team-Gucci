import { Card, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const TemperatureData = (props) => {
  console.log(`props is is:`, props.temperature.properties)
  const temperature = props.temperature.properties;
console.log(`shelterData: shelter is ::`, temperature)
  
  return (
    <Link>
    <Card  sx={{ backgroundColor: "honeydew" , m: 2, p: 2, maxWidth: 500, height: "90%" }}> 
    <Typography variant = "h4"> {temperature.ID}</Typography>
    {/* use sx if you want to give it css styling */}
      <h2>
        {/* <Link to={`/details/${superhero._id}`}>{superhero.name}</Link> */}
      </h2>
      <Typography>DATE:    {temperature.LOCAL_DATE.substring(0,10)}</Typography>
      <p>{temperature.month} {temperature.year} </p>

      <p>Overnight:</p>
      <p>{temperature.overnight}</p>

      <p>Capacity:</p>
      <p>{temperature.capacity}</p>
      {/* <ul>
        {temperature &&
          temperature.properties.map((superpower) => {
            return <li>{superpower}</li>;
          })}
      </ul> */}



      </Card>
    </Link>
  );
};

export default TemperatureData;
