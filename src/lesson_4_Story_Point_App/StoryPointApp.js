import React, { Component } from "react";

import Table from "./components/Table";
import TableActions from "./components/TableActions";
import { appStore } from "./store";

class StoryPointApp extends Component {
  render() {
    return (
      <div>
        <h1>Sprint Board:</h1>
        <TableActions store={appStore} />
        <Table store={appStore} />
      </div>
    );
  }
}

export default StoryPointApp;
