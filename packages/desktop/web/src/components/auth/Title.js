import React from "react";
import styled from "styled-components";

export const TitleContainer = styled.div`
  height: 70px;
  font-size: 50px;
  display: flex;
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  padding: 20px;
  @media (max-width: 400px) {
    height: 60px;
    font-size: 30px;
  }

  ${props => props.styles}
`;

export const Green = styled.div`
  color: #44f804;
`;
export const Orange = styled.div`
  color: #f8a814;
`;

export const Title = ({ styles }) => (
  <TitleContainer styles={styles}>
    <Green>Up</Green>
    <Orange>Carrot</Orange>
  </TitleContainer>
);
