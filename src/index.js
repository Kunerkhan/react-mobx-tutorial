import * as serviceWorker from "./serviceWorker";

import Counter, { counterState } from "./lesson_1/Counter";
import React, { Component } from "react";

import DevTools from "mobx-react-devtools";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools />
        <Counter store={counterState} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
