import React, { Component, View } from "react";
import styled from "styled-components";

export const EmptyContainer = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  width: 100%;
  height: 100%;
`;
export const EmptyIcon = styled.div`
  display: flex;
  font-size: 40px;
  padding: 10px;
`;
export const EmptyText = styled.div`
  display: flex;
  font-size: 30px;
  padding: 10px;
`;

const Empty = ({}) => {
  return (
    <EmptyContainer>
      <EmptyWrapper>
        <EmptyIcon>
          <i className="fas fa-search" />
        </EmptyIcon>
        <EmptyText>Nothing found here...</EmptyText>
      </EmptyWrapper>
    </EmptyContainer>
  );
};

export default Empty;
