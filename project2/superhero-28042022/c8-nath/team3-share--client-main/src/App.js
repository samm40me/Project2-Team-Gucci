import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShelterHomePage from "./Pages/ShelterHomePage";
import TemperatureHomePage from "./Pages/TemperatureHomePage";
import "./App.css";
import CreateSuperheroPage from "./Pages/CreateSuperheroPage";
import DetailPage from "./Pages/DetailPage"
import DetailPageShelter from "./Pages/DetailPageShelter"
import DetailPageTemperature from "./Pages/DetailPageTemperature"
import EditSuperheroPage from "./Pages/EditSuperheroPage"
import NavBar from "./components/NavBar";

function App() {

  //  THIS IS WHAT THE APP RETURNS/RENDERS
  return (


    <div className="App">
      <header className="App-header">
        <NavBar /><h1>maybe a menu bar on the side</h1>
        <div>
  There's other stuff header
</div>
      </header>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/shelterHome" element={<ShelterHomePage />} />
        <Route path="/temperatureHome" element={<TemperatureHomePage />} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="/shelterdetails/:id" element={<DetailPageShelter />} />
        <Route path="/tempdetails/:id" element={<DetailPageTemperature />} />
        <Route path="/add" element={<CreateSuperheroPage />} />
        <Route path="/edit/:id" element={<EditSuperheroPage />} />
      </Routes>

    </div>
  
  );
}

export default App;
