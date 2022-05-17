import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const DataItem = (props) => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      {props.children}
    </Box>
  );
};
const DetailComponent = (props) => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [superhero, setSuperhero] = useState();

  useEffect(() => {
    const getSuperhero = async () => {
      let response = await fetch(`/superheroes/${id}`);
      let data = await response.json();
      // setTimeout(() => setSuperhero(data), 3000);
      setSuperhero(data);
    };

    getSuperhero();
  }, [id]);

  if (!superhero) {
    return <p>Loading Data . . .</p>;
  }

  // {"_id":"6262cccd37daf00ca1a4dac2","name":"Siri","superpowers":["Genius","M1"],"alterEgo":"Apple Assistant","durability":"The Woz","__v":0}
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth="600px"
      my={5}
      mx="auto"
    >
      <DataItem>
        <Typography variant="label">_id:</Typography>{" "}
        <Typography variant="span">{superhero._id}</Typography>
      </DataItem>
      <DataItem>
        <Typography variant="label">name:</Typography>{" "}
        <Typography variant="span">{superhero.name}</Typography>
      </DataItem>
      <DataItem>
        <Typography variant="label">superpowers:</Typography>{" "}
        <Typography variant="span">{superhero.superpowers}</Typography>
      </DataItem>
      <DataItem>
        <Typography variant="label">alterEgo:</Typography>{" "}
        <Typography variant="span">{superhero.alterEgo}</Typography>
      </DataItem>
      <DataItem>
        <Typography variant="label">durability:</Typography>{" "}
        <Typography variant="span">{superhero.durability}</Typography>
      </DataItem>
      <Button
        variant="contained"
        onClick={() => navigate("/edit/" + superhero._id)}
      >
        EDIT
      </Button>
    </Box>
  );
};

export default DetailComponent;
