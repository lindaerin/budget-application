import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";

import "./AddItem.scss";
import Item from "./Item";

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1,
      rows: [
        {
          food: "",
          quantity: 10,
          price: 10,
          type: ""
        }
      ],
      newRow: {
        food: "",
        quantity: 0,
        price: 0,
        type: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("/api/pantry", {
        params: {
          user_id: this.state.user_id
        }
      })
      .then(res1 => {
        console.log(res1);
        this.setState({
          rows: res1.data
        });
      });
  }

  handleNewChange = (e, field) => {
    const newRow = this.state.newRow;
    switch (field) {
      case "quantity":
      case "price":
        const val = parseInt(e.target.value);
        if (!isNaN(val)) {
          newRow[field] = val;
          this.setState({ ...this.state, newRow });
        }
        break;
      case "type":
      case "food":
        newRow[field] = e.target.value;
        this.setState({ ...this.state, newRow });
        break;
      default:
        console.log("Not a valid field");
        break;
    }
  };

  handleChange = (e, field, idx) => {
    const rows = this.state.rows;
    const row = rows[idx];
    switch (field) {
      case "quantity":
      case "price":
        const val = parseInt(e.target.value);
        if (!isNaN(val)) {
          row[field] = val;
          rows[idx] = row;
          this.setState({ ...this.state, rows });
        }
        break;
      case "type":
      case "food":
        row[field] = e.target.value;
        rows[idx] = row;
        this.setState({ ...this.state, rows });
        break;
      default:
        console.log("Not a valid field");
        break;
    }
  };

  //   this.setState({
  //     someState: obj
  // }, () => {
  //     this.afterSetStateFinished();
  // });

  handleAddRow = () => {
    const rowToAdd = this.state.newRow;
    axios
      .post("/api/add_pantry", {
        user_id: this.state.user_id,
        food_name: rowToAdd.food,
        food_type: rowToAdd.type,
        quantity: rowToAdd.quantity,
        price: rowToAdd.price
      })
      .then(res => {
        axios
          .get("/api/pantry", {
            params: {
              user_id: this.state.user_id
            }
          })
          .then(res1 => {
            console.log(res1);
            let x = {
              food: "",
              quantity: "",
              price: "",
              type: ""
            };
            this.setState({
              rows: res1.data,
              newRow: x
            });
          });
        console.log("Success");
      });
    // ,() => console.log("New row added! ", this.state.rows)
  };

  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };

  handleRemoveSpecificRow = idx => {
    console.log("here");
    const rows = [...this.state.rows];
    const row_to_delete = rows[idx];
    // rows.splice(idx, 1);
    this.setState({ rows });
    console.log(row_to_delete);

    axios
      .delete("/api/pantry_remove", {
        params: {
          food_id: row_to_delete.food_id
        }
      })
      .then(res => {
        console.log("Success");
        rows.splice(idx, 1);
        let x = {
          food: "",
          quantity: "",
          price: "",
          type: ""
        };
        this.setState({
          newRow: x
        });
      });
  };

  render() {
    const { rows, newRow } = this.state;
    return (
      <div>
        <div className="header">
          <h2>Your Grocery</h2>
        </div>
        <div className="container">
          <div className="row clear-fix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Food</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Food Type</th>
                    <th />
                  </tr>
                </thead>

                <tbody>
                  {rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx >= 0 ? idx + 1 : " "}</td>
                      <td>
                        <input
                          type="text"
                          name="food"
                          value={item.food_name}
                          onChange={e => this.handleChange(e, "food", idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="quantity"
                          value={item.quantity}
                          onChange={e => this.handleChange(e, "quantity", idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="price"
                          value={item.price}
                          onChange={e => this.handleChange(e, "price", idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        {/* <input
                              type="text"
                              name="expiration"
                              value={item.expiration}
                              onChange={e => handleChange(e, "expiration", idx)}
                              className="form-control"
                            /> */}
                        <select
                          value={item.food_type}
                          onChange={e => this.handleChange(e, "type", idx)}
                          name="type"
                        >
                          <option value="fruits">Fruits</option>
                          <option value="vegetables">Vegetables</option>
                          <option value="proteins">Proteins</option>
                          <option value="dairy">Dairy</option>
                          <option value="drinks">Drinks</option>
                          <option value="carbs">Carbohydrates</option>
                          <option value="others">Others</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                  <Item
                    idx={-1}
                    item={newRow}
                    handleChange={this.handleNewChange}
                    handleRemoveSpecificRow={() => ({})}
                  />
                </tbody>
              </table>
              <button
                onClick={this.handleAddRow}
                className="btn btn-primary float-left"
              >
                Add
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Row
              </button>

              <div>
                <h5>
                  Total Price:{" "}
                  {rows.length === 0
                    ? 0
                    : rows.reduce((sum, i) => (sum += i.quantity * i.price), 0)}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNew;
