import "./index.css";

import * as serviceWorker from "./serviceWorker";

import React, { Component } from "react";

import DevTools from "mobx-react-devtools";
import ReactDOM from "react-dom";
import Store from "./lesson_4_Story_Point_App/store";
import StoryPointApp from "./lesson_4_Story_Point_App/StoryPointApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools />
        <StoryPointApp />
      </div>
    );
  }
}

ReactDOM.render(<App store={Store} />, document.getElementById("root"));

serviceWorker.unregister();
