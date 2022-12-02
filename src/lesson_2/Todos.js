import React, { Component } from "react";

import { observer } from "mobx-react";

@observer
class Todos extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.todos.map(({ text }) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Todos;
