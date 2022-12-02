import "./index.css";

import * as serviceWorker from "./serviceWorker";

import APIStore, { userStore } from "./lesson_5_async_req/store";
import React, { Component } from "react";

import DevTools from "mobx-react-devtools";
import FetchUser from "./lesson_5_async_req/FetchUser";
import ReactDOM from "react-dom";
import { configure } from "mobx";

configure({ enforceActions: "observed" });

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools />
        <FetchUser store={userStore} />
      </div>
    );
  }
}

ReactDOM.render(<App store={APIStore} />, document.getElementById("root"));

serviceWorker.unregister();
