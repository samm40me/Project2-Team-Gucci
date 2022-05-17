import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SuperheroForm from "../components/SuperheroForm";

const CreateSuperheroPage = () => {
  const navigate = useNavigate();
  const onFormCancel = () => {
    navigate("/");
  };
  const onFormSubmit = async (superhero) => {
    const newSuperhero = {
      name: superhero.name,
      alterEgo: superhero.alterEgo,
      durability: superhero.durability,
      superpowers: superhero.superpowers,
    };
    const data = JSON.stringify(newSuperhero);
    console.log(`creating new superhero: ${data}`);
    const response = await fetch("/superheroes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    if (response.status === 200) {
      console.log("success");
      navigate("/");
    } else {
      alert("error creating superhero");
    }
  };
  return (
    <Box mt={3}>
      <h2>Add New Superhero</h2>
      <SuperheroForm
        onFormSubmit={onFormSubmit}
        buttonText={"Create Superhero"}
        onFormCancel={onFormCancel}
      />
    </Box>
  );
};

export default CreateSuperheroPage;
