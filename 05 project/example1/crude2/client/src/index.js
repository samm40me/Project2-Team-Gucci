import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
//import * as serviceWorker from "./serviceWorker";
ReactDOM.createRoot(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
