import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import RegisterContainer from "@/modules/auth/RegisterContainer";

@inject("store")
@observer
export default class RegisterRoute extends Component {
  state = {};

  onSubmitForm = ({ email, password }) => {
    const {
      store: {
        auth: { register }
      }
    } = this.props;

    register(email, password);
  };

  render() {
    const {
      store: {
        auth: { error:  authError, isLoading }
      }
    } = this.props;
    return (
            <RegisterContainer 
                onSubmitForm={this.onSubmitForm}
                authError={authError}
                isLoading={isLoading}
            />
        );
    }
}
