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
`;

const AuthInputContainer = styled.div`
  width: 100%;
  padding: 20px;
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

const AuthInput = ({ label, ...rest }) => (
  <AuthInputContainer>
    <Label>{label}</Label>
    <AuthInputComponent {...rest} />
  </AuthInputContainer>
);

export default AuthInput;
