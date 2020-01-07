import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 80%;
  height: 30px;
`;

const TextContainer = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: hsla(229, 6%, 43%, 1);
  top: 50%;
  z-index: 0;
`;

const Dot = styled.div`
  background: #0d0d17;
  /* background: yellow; */
  /* padding: 5px; */
  height: 30px;
  width: 30px;
  text-align: center;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Delimiter = ({ children }) => (
  <Container>
    <Line />
    <TextContainer>
      <Dot>{children}</Dot>
    </TextContainer>
  </Container>
);
