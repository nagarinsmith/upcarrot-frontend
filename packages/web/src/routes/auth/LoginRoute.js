import React, { Component } from "react";
import Login from "@/modules/auth/LoginContainer";
import { observer, inject } from "mobx-react";

// import as from ""
// the smart component that is linked to the store
@inject("store")
@observer
export default class LoginRoute extends Component {
  state = {};
  render() {
    return (
      <div>
        <Login auth={this.props.store.auth} />
      </div>
    );
  }
}
