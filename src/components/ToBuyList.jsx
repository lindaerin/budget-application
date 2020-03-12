import React, { Component } from "react";

class ToBuyList extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }
  render() {
    var todolist = this.props.entries;
    var listItems = todolist.map(this.createTasks);

    return <ul className="list">{listItems}</ul>;
  }
}

export default ToBuyList;
