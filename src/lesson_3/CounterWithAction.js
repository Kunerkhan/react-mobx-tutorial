import React, { Component } from "react";

import { configure } from "mobx";
import { observer } from "mobx-react";

configure({ enforceActions: "observed" });

@observer
class CounterWithActions extends Component {
  handleIncrement = () => {
    this.props.store.increment();
  };
  handleDecrement = () => {
    this.props.store.decrement();
  };

  render() {
    return (
      <>
        <h1>{this.props.store.nickName}</h1>
        <h1>{this.props.store.age}</h1>
        <button onClick={this.handleDecrement}>-1</button>
        <button onClick={this.handleIncrement}>+1</button>
      </>
    );
  }
}

export default CounterWithActions;
