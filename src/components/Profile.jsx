import React, { Component } from "react";
import blankprofile from "../assets/blankprofile.png";

import "./Profile.scss";
import ToBuyList from "./ToBuyList";
import SettingBudget from "./SettingBudget";

class Profile extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._inputElement.value = "";
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({ items: filteredItems });
  }

  render() {
    return (
      <div className="parent">
        <div className="leftside">
          <h2 className="">Your Profile</h2>
          <img src={blankprofile} className="ProfileImg"></img>
          <div class="bottomleft">
            <SettingBudget />
          </div>
        </div>

        <div className="rightside">
          <div className="card">
            <div className="card-header bg-info text-center ">
              {" "}
              Grocery Check List{" "}
            </div>
            <div className="card-body">
              <form onSubmit={this.addItem}>
                <input
                  ref={a => (this._inputElement = a)}
                  placeholder="Enter Item"
                ></input>
                <button type="submit">Add</button>
              </form>
              <ToBuyList entries={this.state.items} delete={this.deleteItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
