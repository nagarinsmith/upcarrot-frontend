import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LoginContainer from "@/modules/auth/LoginContainer";

// import as from ""
// the smart component that is linked to the store
@inject("store")
@observer
export default class LoginRoute extends Component {
  state = {};

  onSubmitForm = ({ email, password }) => {
    const {
      store: {
        auth: { login }
      }
    } = this.props;

    login(email, password);
  };

  render() {
    const {
      store: {
        auth: { error: authError }
      }
    } = this.props;
    return (
      <LoginContainer
        onSubmitForm={this.onSubmitForm}
        authError={authError && authError.status === 401}
      />
    );
  }
}
