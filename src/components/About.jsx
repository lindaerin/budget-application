import React, { Component } from "react";

import "./About.scss";
import aboutImg1 from "../assets/aboutImg1.png";
import aboutImg2 from "../assets/aboutImg2.png";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="features">
        <div>
          <h2 className="about-title">Simple and Free to Set Up </h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={aboutImg1} rounded className="img-fluid" />
              <p className="aboutInfo">
                Create your own custom list for your grocery items and get
                updates on your weekly spendings
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={aboutImg2} className="img-fluid" />
              <p className="aboutInfo">
                Weekly Anaylsis of your grocery spendings. Obtain breakdown
                anaylsis of food that has gone to waste
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h3 className="contact">Contact Us!</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="4"></textarea>
              </div>
              <input
                type="submit"
                class="btn btn-primary btn-block"
                value="Send"
                name=""
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
