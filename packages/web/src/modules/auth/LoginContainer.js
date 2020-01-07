import React from "react";
import { useForm } from "react-hook-form";

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
const LoginContainer = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <HeroContainer>
      <LoginWrapper>
        <Title>Title</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AuthInput
            type="text"
            label="Email"
            ref={register({ required: true })}
            name="email"
            placeholder="john@doe.com"
          />
          <AuthInput
            type="password"
            label="Password"
            ref={register({ required: true })}
            name="password"
            placeholder="notYourBDay"
          />
          <AuthButton
            title="Login"
            type="submit"
            onClick={() => console.log("test")}
          />
        </form>
        <AuthLink to="">Forgotten Password?</AuthLink>
        <Delimiter>or</Delimiter>
        <AuthLink to="">Neww here? Create new Account</AuthLink>
      </LoginWrapper>
    </HeroContainer>
  );
};

export default LoginContainer;
