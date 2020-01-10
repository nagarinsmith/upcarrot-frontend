import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div`
  padding: 10px 0px 0px;
  letter-spacing: 2px;
  font-size: 12px;
  font-family: "Roboto Mono", monospace;
  color: hsla(229, 6%, 43%, 1);
  transition: all 0.2s ease-in;
  &:hover {
    color: #f8a814;
  }
  a:hover {
    color: #f8a814;
  }
  a {
    transition: all 0.2s ease-in;
  }
  text-align: center;
`;

export const AuthLink = ({ to, ...rest }) => (
  <LinkContainer>
    <Link to={to} {...rest} />
  </LinkContainer>
);
