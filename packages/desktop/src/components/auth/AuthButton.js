import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const AuthButtonComponent = styled.button`
  background: #44f804;
  width: 60%;
  height: 50px;
  color: white;
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
  margin-bottom: 10px;
  svg {
    margin-left: 10px;
  }
`;

export const AuthButton = ({ title, isLoading, ...rest }) => (
  <AuthButtonComponent {...rest}>
    {title}
    {isLoading && <FontAwesomeIcon icon={faSpinner} pulse />}
  </AuthButtonComponent>
);
