import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Box,
  List,
  ListItem,
  ListSubheader,
  Button,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const SuperheroForm = (props) => {
  const [superpowers, setSuperpowers] = useState([]);
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const [durability, setDurability] = useState("");
  const [superpowerToAdd, setSuperpowerToAdd] = useState("");
  const onFormSubmit = props.onFormSubmit;
  const initialValues = props.initialValues;
  const buttonText = props.buttonText;
  const onFormCancel = props.onFormCancel;

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name);
      setAlterEgo(initialValues.alterEgo);
      setDurability(initialValues.durability);
      setSuperpowers(initialValues.superpowers);

      console.log(`initialValues is:`, initialValues);
    }
  }, [initialValues]);
  const addSuperpower = () => {
    setSuperpowers((curr) => {
      return [...curr, superpowerToAdd];
    });
    setSuperpowerToAdd("");
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Box
        display="flex"
        flexDirection="column"
        mb={3}
        sx={{ width: "50%", margin: "auto" }}
      >
        <TextField
          label="Name"
          variant="standard"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          label="Alter Ego"
          variant="standard"
          type="text"
          value={alterEgo}
          onChange={(event) => {
            setAlterEgo(event.target.value);
          }}
        />
        <TextField
          label="Durability"
          variant="standard"
          type="text"
          value={durability}
          onChange={(event) => {
            setDurability(event.target.value);
          }}
        />
        <List>
          <ListSubheader>Superpowers</ListSubheader>
          {superpowers.map((superpower, index) => {
            return (
              <ListItem>
                <Typography>{superpower}</Typography>
                <DeleteForeverIcon
                  color="error"
                  onClick={() => {
                    setSuperpowers((curr) => {
                      return curr.filter((_, i) => i !== index);
                    });
                  }}
                />
              </ListItem>
            );
          })}
        </List>
        <TextField
          label="Superpower To Add"
          variant="standard"
          type="text"
          value={superpowerToAdd}
          onChange={(event) => {
            setSuperpowerToAdd(event.target.value);
          }}
        />
        <Button variant="outlined" onClick={addSuperpower}>
          Add Superpower
        </Button>
        <br />
        <Button
          variant="contained"
          onClick={() =>
            onFormSubmit({
              name: name,
              superpowers: superpowers,
              alterEgo: alterEgo,
              durability: durability,
            })
          }
        >
          {buttonText}
        </Button>
        <Button onClick={onFormCancel}>Cancel</Button>
      </Box>
    </Container>
  );
};

export default SuperheroForm;
