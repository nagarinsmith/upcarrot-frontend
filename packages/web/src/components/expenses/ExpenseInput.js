import styled from "styled-components";
import React from "react";
const ExpenseInputComponent = styled.input`
  transition: all 0.2s ease-in;
  background: transparent;
  margin-bottom: 10px;
  width: 100%;
  height: 20px;
  color: white;
  font-size: 14px;
  font-family: "Roboto Mono", monospace;
  border-bottom: 1px solid hsla(229, 6%, 43%, 1);

  &::selection {
    background: white;
  }

  &:focus {
    border-bottom: 1px solid white;
  }
`;

const ExpenseInputContainer = styled.div`
  width: 100%;
  padding: 10px;
  color: hsla(229, 6%, 43%, 1);
  transition: all 0.2s ease-in;
  &:focus-within {
    color: white;
  }
`;

const Label = styled.div`
  /* color: hsla(229, 6%, 43%, 1); */
  letter-spacing: 3px;
`;

const ExpenseInput = React.forwardRef(({ label, ...rest }, ref) => (
  <ExpenseInputContainer>
    <Label>{label}</Label>
    <ExpenseInputComponent {...rest} ref={ref} />
  </ExpenseInputContainer>
));

export default ExpenseInput;
