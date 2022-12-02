import "./index.css";

import * as serviceWorker from "./serviceWorker";

import React, { Component } from "react";
import StoreWithActions, {
  appStoreWithActions,
} from "./lesson_6_custom_reactions/storeWithReactions";

import Counter from "./lesson_1/Counter";
import DevTools from "mobx-react-devtools";
import ReactDOM from "react-dom";
import { configure } from "mobx";

configure({ enforceActions: "observed" });

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools />
        <Counter store={appStoreWithActions} />
      </div>
    );
  }
}

ReactDOM.render(
  <App store={StoreWithActions} />,
  document.getElementById("root")
);

serviceWorker.unregister();
