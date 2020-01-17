import React from "react";

import styled from "styled-components";

import { NotFoundContainer} from "src/routes/common/NotFoundContainer";
import { NotFoundWrapper} from "src/routes/common/NotFoundWrapper";

export const Title = styled.div`
height: 100px;
font-size: 120px;
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

export const TitleContainer = styled.div`
  height: 70px;
  font-size: 200px;
  display: flex;
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  ${props => props.styles}

  @media (max-width: 600px) {
    font-size: 100px;
  }
`;

export const White = styled.div`
  color: #FFF;
`;

export const Message = styled.div`
  height: 150px;
  font-size: 30px;
  display: flex;
  font-family: "Roboto Mono", monospace;
  font-weight: 800;
  padding: 50px 0;
  text-align: center;

${props => props.styles}
`;


const NotFound = ({ }) => {
  return (
    <NotFoundContainer>
      <NotFoundWrapper>
        <Title> 
          <Orange> Up</Orange> 
          <Green> Carrot</Green>
        </Title>
        <Message> Ooops! You're lost... </Message>
        <TitleContainer>
          <White>404</White>
        </TitleContainer>
        <Message> No page here, just empty space!  </Message>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
};

export default NotFound;
