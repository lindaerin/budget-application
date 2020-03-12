import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// import Login from "./components/Login";
// import NavBar from "./components/NavBar";
// import UserNav from "./components/UserNav";
// import Signup from "./components/Signup";
// import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
