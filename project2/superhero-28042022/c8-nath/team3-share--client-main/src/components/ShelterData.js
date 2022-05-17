import { Card, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ShelterData = (props) => {
  console.log(`props is is:`, props.shelter)
  const shelter = props.shelter;
console.log(`shelterData: shelter is ::`, shelter)
  
  return (
    <Link>
    <Card  sx={{ backgroundColor: "honeydew" , m: 2, p: 2, maxWidth: 500, height: "90%" }}> 
    <Typography variant = "h4"> {shelter.sheltername}</Typography>
    {/* use sx if you want to give it css styling */}
      <h2>
        {/* <Link to={`/details/${superhero._id}`}>{superhero.name}</Link> */}
      </h2>
      <Typography>DATE:    {shelter.date.substring(0,10)}</Typography>
      <p>{shelter.month} {shelter.year} </p>

      <p>Overnight:</p>
      <p>{shelter.overnight}</p>

      <p>Capacity:</p>
      <p>{shelter.capacity}</p>



      </Card>
    </Link>
  );
};

export default ShelterData;
