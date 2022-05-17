import React from "react";
// import SuperheroList from "../components/SuperheroList";
import TemperatureList from "../components/TemperatureList";
import { Typography } from "@mui/material";

function TemperatureHomePage() {
  return (
    <div>
      <Typography variant="h2">Temperature Lists</Typography>

      <TemperatureList />
    </div>
  );
}

export default TemperatureHomePage;
