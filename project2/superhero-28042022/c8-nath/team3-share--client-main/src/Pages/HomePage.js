import React from "react";
import SuperheroList from "../components/SuperheroList";
import { Typography } from "@mui/material";

function HomePage() {
  return (
    <div>
      <Typography variant="h2">Superheroes List</Typography>

      <SuperheroList />
    </div>
  );
}

export default HomePage;
