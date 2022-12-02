import * as serviceWorker from "./serviceWorker";

import React, { Component } from "react";

import DevTools from "mobx-react-devtools";
import ReactDOM from "react-dom";
import Todos from "./lesson_2/Todos";
import { todosObersableArray } from "./lesson_2/observableArray";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools />
        <Todos todos={todosObersableArray} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
todosObersableArray.push({ text: "Learn RN" });

serviceWorker.unregister();
