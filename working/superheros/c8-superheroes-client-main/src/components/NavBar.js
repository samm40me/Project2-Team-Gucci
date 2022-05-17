import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link, Typography } from "@mui/material";
import { useContext } from "react";
import AuthContext from "./AuthContext";
export default function NavBar(props) {
  var authContext = useContext(AuthContext);
  var loggedInUser = authContext.loggedInUser;
  var isAgent = loggedInUser?.isAgent;
  return (
    <AppBar position="static">
      <Toolbar>
        <Link component={RouterLink} color="white" underline="none" to="/">
          <Button color="inherit">Home</Button>
        </Link>
        {isAgent && (
          <Link component={RouterLink} color="white" underline="none" to="/add">
            <Button color="inherit">Add Superhero</Button>
          </Link>
        )}
        {!loggedInUser && (
          <Link
            component={RouterLink}
            color="white"
            underline="none"
            to="/login"
          >
            <Button color="inherit">Login</Button>
          </Link>
        )}
        {loggedInUser && (
          <Link
            component={RouterLink}
            color="white"
            underline="none"
            to="/logout"
          >
            <Button color="inherit">Logout</Button>
          </Link>
        )}
        <Typography>{loggedInUser?.username}</Typography>
      </Toolbar>
    </AppBar>
  );
}
