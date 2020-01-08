import React from "react";
import styled from "styled-components";

const AuthInputComponent = styled.input`
  transition: all 0.2s ease-in;
  background: transparent;
  margin-bottom: 10px;
  width: 100%;
  height: 40px;
  color: white;
  font-size: 16px;
  font-family: "Roboto Mono", monospace;
  border-bottom: 1px solid hsla(229, 6%, 43%, 1);

  &::selection {
    background: white;
  }

  &:focus {
    border-bottom: 1px solid white;
  }
  ${props => props.hasError && "border-color: red !important;"}
`;

const AuthInputContainer = styled.div`
  width: 100%;
  padding: 10px;
  color: hsla(229, 6%, 43%, 1);
  transition: all 0.2s ease-in;
  &:focus-within {
    color: white;
  }
`;

const Label = styled.div`
  /* color: hsla(229, 6%, 43%, 1); */
  letter-spacing: 3px;
`;

export const Error = styled.div`
  color: red;
`;

const AuthInput = React.forwardRef(({ label, errors, ...rest }, ref) => (
  <AuthInputContainer hasError={errors}>
    <Label>{label}</Label>
    <AuthInputComponent {...rest} ref={ref} hasError={errors} />
    {errors && <Error>{errors.message}</Error>}
  </AuthInputContainer>
));

export default AuthInput;
