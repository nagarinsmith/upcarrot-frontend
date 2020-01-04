import React, { Component } from "react";
import styled from "styled-components";
import {
  Container as FabContainer,
  Button,
  Link
} from "react-floating-action-button";

const FabWrapper = styled.div`
  position: fixed;
  @media (min-width: 773px) {
    display: none;
  }
`;

const MobileNavigation = ({ items }) => (
  <FabWrapper>
    <FabContainer>
      {items.map(item => (
        <Link
          href="#"
          tooltip="Create note link"
          icon="fas fa-sticky-note"
          className="fab"
        />
      ))}
    </FabContainer>
  </FabWrapper>
);

export default MobileNavigation;
