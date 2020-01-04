import React, { Component } from "react";

// one dumb component in which we pass props and actions
export default class LoginContainer extends Component {
  state = {};
  render() {
    const {
      auth: { login }
    } = this.props;
    return <div onClick={() => login("oare", "merge")}>Login</div>;
  }
}
