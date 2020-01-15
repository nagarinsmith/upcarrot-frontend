import React, { Component, View} from "react";
import styled from "styled-components";

export const EmptyContainer = styled.div`

  background-size: cover;
  background-position: center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyWrapper = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 80%;
  /* background: white; */
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 250px;

  @media () {
    box-shadow: none;
    padding: 10;
  }

`;
export const EmptyIcon = styled.div`
  display:flex;
  font-size:40px;
  padding:10px;

`;
export const EmptyText = styled.div`
  display:flex;
  font-size:30px;
  padding:10px;

`;

const Empty = ({ }) => {
    return (
     <EmptyContainer>
         <EmptyWrapper>
            <EmptyIcon>
            <i class="fas fa-search"></i>
            </EmptyIcon>
            <EmptyText>
            Nothing found here...
            </EmptyText>
         </EmptyWrapper>
     </EmptyContainer>
   
   
  
   
    );
  };
  
  export default Empty;