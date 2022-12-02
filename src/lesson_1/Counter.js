import React, { Component } from "react";

import { observable } from "mobx";
import { observer } from "mobx-react";

export const counterState = observable({
  count: 0,
});

counterState.increment = function() {
  this.count++;
};

counterState.decrement = function() {
  this.count++;
};

@observer
class Counter extends Component {
  handleIncrement = () => {
    this.props.store.increment();
  };
  handleDecrement = () => {
    this.props.store.decrement();
  };

  render() {
    return (
      <>
        <h1>{this.props.store.count}</h1>
        <button onClick={this.handleDecrement}>-1</button>
        <button onClick={this.handleIncrement}>+1</button>
      </>
    );
  }
}

export default Counter;
