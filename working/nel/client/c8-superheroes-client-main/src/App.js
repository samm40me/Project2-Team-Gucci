import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage";
import CreateSuperheroPage from "./pages/CreateSuperheroPage";
import HomePage from "./pages/HomePage";
import EditSuperheroPage from "./pages/EditSuperheroPage";
import NavBar from "./components/NavBar";
import Logout from "./components/Logout";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./components/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route
            path="/add"
            element={
              <PrivateRoute mustBeAgent element={<CreateSuperheroPage />} />
            }
          />
          <Route
            path="/edit/:id"
            element={<PrivateRoute element={<EditSuperheroPage />} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
