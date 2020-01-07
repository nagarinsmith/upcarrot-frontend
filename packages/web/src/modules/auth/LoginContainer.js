import React, { Component } from "react";
import {
  HeroContainer,
  LoginWrapper,
  AuthInput,
  Title,
  AuthButton,
  AuthLink,
  Delimiter
} from "src/components/index";

// one dumb component in which we pass props and actions
export default class LoginContainer extends Component {
  state = {};
  render() {
    return (
      <HeroContainer>
        <LoginWrapper>
          <Title>Title</Title>
          <AuthInput type="text" label="Email" placeholder="john@doe.com" />
          <AuthInput
            type="password"
            label="Password"
            placeholder="notYourBDay"
          />
          <AuthButton title="Login" />
          <AuthLink to="">Forgotten Password?</AuthLink>
          <Delimiter>or</Delimiter>
          <AuthLink to="">Neww here? Create new Account</AuthLink>
        </LoginWrapper>
      </HeroContainer>
    );
  }
}
