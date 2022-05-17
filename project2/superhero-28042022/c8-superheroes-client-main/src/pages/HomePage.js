import { Typography } from "@mui/material";
import React from "react";
import SuperheroList from "../components/SuperheroList";
const HomePage = () => {
  return (
    <div>
      <Typography variant="h2">Superheroes List</Typography>
      <SuperheroList />
    </div>
  );
};

export default HomePage;
