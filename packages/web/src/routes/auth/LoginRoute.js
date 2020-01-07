import React, { Component } from "react";
import Login from "@/modules/auth/LoginContainer";
import { observer, inject } from "mobx-react";
import { HeroContainer, LoginWrapper, AuthInput } from "src/components";
import { Title } from "src/components/login/Title";
import LoginContainer from "@/modules/auth/LoginContainer";

// import as from ""
// the smart component that is linked to the store
@inject("store")
@observer
export default class LoginRoute extends Component {
  state = {};
  render() {
    return <LoginContainer />;
  }
}
