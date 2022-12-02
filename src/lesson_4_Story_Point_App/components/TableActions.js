import React, { Component } from "react";

import { observer } from "mobx-react";

@observer
class TableActions extends Component {
  addDeveloper = () => {
    const name = prompt("The name:");
    const sp = parseInt(prompt("The story points:"), 10);
    this.props.store.addDeveloper({ name, sp });
  };

  clearList = () => {
    this.props.store.clearList();
  };

  filterDevelopers = ({ target: { value } }) => {
    this.props.store.updateFilter(value);
  };

  render() {
    return (
      <div className="controls">
        <button onClick={this.clearList}>Clear table</button>
        <button onClick={this.addDeveloper}>Add record</button>
        <input
          value={this.props.store.filter}
          onChange={this.filterDevelopers}
        />
      </div>
    );
  }
}

export default TableActions;
