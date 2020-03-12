import React from "react";

export default props => {
  console.log(props);
  const { idx, item, handleChange, handleRemoveSpecificRow } = props;
  return (
    <tr id="addr0" key={idx}>
      <td>{idx >= 0 ? idx + 1 : " "}</td>
      <td>
        <input
          type="text"
          name="food"
          value={item.food_name}
          onChange={e => handleChange(e, "food", idx)}
          className="form-control"
        />
      </td>
      <td>
        <input
          type="text"
          name="quantity"
          value={item.quantity}
          onChange={e => handleChange(e, "quantity", idx)}
          className="form-control"
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          value={item.price}
          onChange={e => handleChange(e, "price", idx)}
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
          onChange={e => handleChange(e, "type", idx)}
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
        {idx >= 0 && (
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={this.handleRemoveSpecificRow(idx)}
          >
            Remove
          </button>
        )}
      </td>
    </tr>
  );
};
