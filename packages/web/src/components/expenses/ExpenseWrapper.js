import styled from "styled-components";

export const ExpenseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 40%;
  /* background: white; */
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 30px;

  @media (max-width: 600px) {
    box-shadow: none;
    padding: 0;
  }
`;