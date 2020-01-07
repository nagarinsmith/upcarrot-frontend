import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  HeroContainer,
  LoginWrapper,
  AuthInput,
  Title,
  AuthButton,
  AuthLink,
  Delimiter,
  Error,
  LoginForm
} from "src/components/index";

const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email given is not valid!"),
  password: yup.string().required("Password is required")
});

// one dumb component in which we pass props and actions
const LoginContainer = ({ onSubmitForm, authError }) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema
  });

  return (
    <HeroContainer>
      <LoginWrapper>
        <Title>Title</Title>
        <LoginForm onSubmit={handleSubmit(onSubmitForm)}>
          <AuthInput
            type="text"
            label="Email"
            ref={register({ required: true })}
            name="email"
            placeholder="john@doe.com"
            errors={errors["email"]}
          />
          <AuthInput
            type="password"
            label="Password"
            ref={register({ required: true })}
            name="password"
            placeholder="notYourBDay"
            errors={errors["password"]}
          />
          <AuthButton title="Login" type="submit" />
        </LoginForm>
        {authError && <Error>Bad Credentials</Error>}
        {/* <AuthLink to="">Forgotten Password?</AuthLink> */}
        <Delimiter>or</Delimiter>
        <AuthLink to="">Neww here? Create new Account</AuthLink>
      </LoginWrapper>
    </HeroContainer>
  );
};

export default LoginContainer;
