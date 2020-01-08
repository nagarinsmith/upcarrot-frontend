import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
  HeroContainer,
  AuthWrapper,
  AuthInput,
  Title,
  AuthButton,
  AuthLink,
  Delimiter,
  Error,
  AuthForm
} from "src/components/index";

const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email given is not valid!"),
  password: yup.string().required("Password is required")
});

// one dumb component in which we pass props and actions
const LoginContainer = ({ onSubmitForm, authError, isLoading }) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema
  });

  return (
    <HeroContainer>
      <AuthWrapper>
        <Title>Title</Title>
        <AuthForm onSubmit={handleSubmit(onSubmitForm)}>
          <AuthInput
            type="text"
            label="Email"
            ref={register({ required: true })}
            name="email"
            placeholder="john@doe.com"
            errors={errors["email"]}
            disabled={isLoading}
          />
          <AuthInput
            type="password"
            label="Password"
            ref={register({ required: true })}
            name="password"
            placeholder="Password"
            errors={errors["password"]}
            disabled={isLoading}
          />
          <AuthButton title="Login" type="submit" isLoading={isLoading} />
        </AuthForm>
        {authError && <Error>Bad Credentials</Error>}
        {/* <AuthLink to="">Forgotten Password?</AuthLink> */}
        <Delimiter>or</Delimiter>
        <AuthLink to="/register">New here? Create new account</AuthLink>
      </AuthWrapper>
    </HeroContainer>
  );
};

export default LoginContainer;
