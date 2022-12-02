import * as serviceWorker from "./serviceWorker";

import React, { Component } from "react";

import CounterWithActions from "./lesson_3/CounterWithAction";
import DevTools from "mobx-react-devtools";
import ReactDOM from "react-dom";
import { counterObservableObjectWithActions } from "./lesson_3/observableObjectWithActions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools />
        <CounterWithActions store={counterObservableObjectWithActions} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
