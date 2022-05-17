import React, { useEffect, useState } from "react";
import SuperheroData from "./SuperheroData";
import { Grid, Typography } from "@mui/material";

const SuperheroList = () => {
  const [superheroList, setSuperheroList] = useState();
  useEffect(() => {
    const getSuperheroList = async () => {
      try {
        let response = await fetch("/superheroes");
        let superheroes = await response.json();
        console.log(`superheroes is:`, superheroes);
        return setSuperheroList(superheroes);
      } catch (ex) {
        console.log(ex);
      }
    };
    getSuperheroList();
  }, []);

  return (
    <Grid container>
      {superheroList ? (
        superheroList.map((superhero, index) => {
          return (
            <Grid xs={12} sm={6} md={3} item>
              <SuperheroData superhero={superhero} />
            </Grid>
          );
        })
      ) : (
        <Typography component="div" variant="h3">
          Loading...
        </Typography>
      )}
    </Grid>
  );
};

export default SuperheroList;
