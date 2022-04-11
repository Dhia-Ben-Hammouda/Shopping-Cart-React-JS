import React from "react";
import { Route , Routes } from "react-router-dom";
import LoginPage from "./loginPage/LoginPage.jsx";
import LandingPage from "./landingPage/LandingPage.jsx";
import "./styles.css";

const App = ()=>{
  return(
    <>
      <Routes>
        <Route exact path="/" element={ <LoginPage/> } />
        <Route exact path="/landingPage" element={ <LandingPage/> } />
      </Routes>
    </>
  );
}

export default App;