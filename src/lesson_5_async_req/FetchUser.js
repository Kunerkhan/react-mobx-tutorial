import React, { Component } from "react";

import { observer } from "mobx-react";

@observer
class FetchUser extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <button onClick={store.getUser}>Get User</button>
        <h1>{store.user ? store.user.login.username : "Default"}</h1>
      </div>
    );
  }
}

export default FetchUser;
