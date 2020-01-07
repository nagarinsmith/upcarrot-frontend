import React from "react";
import styled from "styled-components";

const AuthButtonComponent = styled.button`
  background: #44f804;
  width: 60%;
  height: 50px;
  color: white;
  /* border: 3px white solid; */
  /* border-radius: 10px; */
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  transition: all 0.2s ease-in;
  box-shadow: 0 3px 30px rgb(248, 168, 20, 0), 0 3px 6px rgb(248, 168, 20, 0);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 25px rgb(248, 168, 20, 0.3),
      0 3px 6px rgb(248, 168, 20, 0.22);
  }
`;

export const AuthButton = ({ title, ...rest }) => (
  <AuthButtonComponent {...rest}>{title}</AuthButtonComponent>
);
