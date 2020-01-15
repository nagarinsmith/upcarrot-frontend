import styled from "styled-components";

export const NotFoundWrapper = styled.div`
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
