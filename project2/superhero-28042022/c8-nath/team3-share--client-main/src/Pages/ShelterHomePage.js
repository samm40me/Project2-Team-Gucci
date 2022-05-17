import React from "react";
// import SuperheroList from "../components/SuperheroList";
import ShelterList from "../components/ShelterList";
import { Typography } from "@mui/material";

function ShelterHomePage() {
  return (
    <div>
      <Typography variant="h2">Shelter List</Typography>

      <ShelterList />
    </div>
  );
}

export default ShelterHomePage;
