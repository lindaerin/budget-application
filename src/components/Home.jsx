import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import landingImg from "../assets/landingImg.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="parent">
        <div className="left">
          <h2>Detailed Grocery Spending Breakdown</h2>
          <br />
          <p>
            When you are on top of your spending. <br /> Manage your grocery
            finances effortlessly.
          </p>
          <Link to="/signup">
            <button className="btn btn-primary btn-m">GET STARTED</button>
          </Link>
        </div>
        <div className="right">
          <img src={landingImg} className="landingImg"></img>
        </div>
      </div>
    );
  }
}

export default Home;
