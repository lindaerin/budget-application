import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Error from "./Error";
import AddNew from "./AddNew";
import Profile from "./Profile";
import Chart from "./Chart";
import navlogo from "../assets/navlogo.png";
import Login from "./Login";
import "./NavBar.scss";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <Router>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary navbar-custom">
          <a className="navbar-brand" href="/">
            <div className="logo">
              <img src={navlogo} className="img-fluid logoImage" />
              &nbsp;&nbsp;Carton
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/profile">
                  <a class="nav-link">Something</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/chart">
                  <a class="nav-link">Something</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addItem">
                  <a class="nav-link">Something</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout">
                  <a className="nav-link text-light">
                    <button className="btn btn-sm btn-light">Something</button>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/chart" exact>
            <Chart foodBreakdown />
          </Route>
          <Route path="/additem" exact>
            <AddNew />
          </Route>
          <Route path="/logout" exact>
            <Home />
          </Route>
          <Route path="/">
            <Error />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default NavBar;
