import { Card, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const SuperheroData = (props) => {
  // console.log(`props is is:`, props.superhero._id)
  const superhero = props.superhero;

  return (
    <Link>
    <Card  sx={{ backgroundColor: "honeydew" , m: 2, p: 2, maxWidth: 500, height: "90%" }}> 
    <Typography variant = "h4"> {superhero.name}</Typography>
    {/* use sx if you want to give it css styling */}
      <h2>
        {/* <Link to={`/details/${superhero._id}`}>{superhero.name}</Link> */}
      </h2>
      <Typography>AlterEgo:</Typography>
      <p>{superhero.alterEgo}</p>
      <p>Superpowers:</p>
      <ul>
        {superhero &&
          superhero.superpowers.map((superpower) => {
            return <li>{superpower}</li>;
          })}
      </ul>
      <p>Durability:</p>
      <p>{superhero.durability}</p>
      </Card>
    </Link>
  );
};

export default SuperheroData;
