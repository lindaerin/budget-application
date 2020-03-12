import React, { Component } from "react";

class SettingBudget extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      yourbudget: "0"
    };
  }

  handleChange = event => {
    event.preventDefault();
    const yourbudget = event.target.value;
    this.setState({ yourbudget });
  };

  handleEnter = event => {
    alert(`$ ${this.state.yourbudget} is your new set budget`);
    event.preventDefault();
  };

  render() {
    const { yourbudget } = this.state;
    return (
      <div>
        <div className="card card-body mb-3">
          <label> Set Your Budget: </label>
          <form className="form-inline" onSubmit={this.handleEnter}>
            <input
              className="form-control"
              type="number"
              placeholder="Enter budget"
              onChange={this.handleChange}
              name="yourbudget"
            />
            <button className="btn btn-dark ml-2" type="enter">
              {" "}
              Enter{" "}
            </button>
          </form>
        </div>

        <div className="card">
          <div className="card-header bg-info text-center"> Your Budget</div>
          <div className="card-body">
            <h5 className="text-center card-title">$ {yourbudget}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingBudget;
