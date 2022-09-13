import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Home from "./Pages/Home";
import RegistroClinico from "./Pages/RegistroClinico";
import HomeGastrolap from "./Pages/HomeGastrolap";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomeGastrolap />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
