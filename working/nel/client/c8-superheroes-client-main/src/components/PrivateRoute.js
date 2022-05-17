import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import AuthContext from "./AuthContext";

const PrivateRoute = (props) => {
  const authContext = useContext(AuthContext);

  const loggedInUser = authContext.loggedInUser;
  const loading = authContext.loading;

  const mustBeAgent = props.mustBeAgent;
  const element = props.element;

  if (loading) {
    return <div>Loading...</div>;
  }
  if (
    (loggedInUser?.isAgent && mustBeAgent) ||
    (loggedInUser && !mustBeAgent)
  ) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
