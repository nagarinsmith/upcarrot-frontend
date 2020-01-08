import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  AuthButton,
  AuthForm,
  AuthInput,
  AuthLink,
  AuthWrapper,
  Delimiter,
  HeroContainer,
  Title
} from "src/components/index";

const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email given is not valid!"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirmation of password is required!")
    .oneOf([yup.ref("password"), null], "Password must match")
});

const RegisterContainer = ({ onSubmitForm, authError, isLoading }) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: RegisterSchema
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
          <AuthInput
            type="password"
            label="Confirm password"
            ref={register({ required: true })}
            name="confirmPassword"
            placeholder="Confirm password"
            errors={errors["confirmPassword"]}
            disabled={isLoading}
          />
          <AuthButton title="Register" type="submit" isLoading={isLoading} />
        </AuthForm>
        <Delimiter>or</Delimiter>
        <AuthLink to="/login">Already have an account? Sign in</AuthLink>
      </AuthWrapper>
    </HeroContainer>
  );
};

export default RegisterContainer;
