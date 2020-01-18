import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { TYPES } from "src/modules/borrowed/expenseConstants";

const Filters = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 55px 10px 55px;
  min-width: 400px;

  .ui.toggle.buttons {
    display: flex !important  ;
    flex-wrap: wrap !important;
  }

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

const FilterItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const ExpenseFilters = ({ expenseType, handleTypeFilterChanges }) => {
  return (
    <Filters>
      <FilterItem>
        <Button.Group toggle>
          <Button
            positive={expenseType === TYPES.food}
            onClick={() => handleTypeFilterChanges(TYPES.food)}
          >
            FOOD
          </Button>
          <Button.Or />
          <Button
            positive={expenseType === TYPES.shopping}
            onClick={() => handleTypeFilterChanges(TYPES.shopping)}
          >
            SHOPPING
          </Button>
          <Button.Or />
          <Button
            positive={expenseType === TYPES.rent}
            onClick={() => handleTypeFilterChanges(TYPES.rent)}
          >
            RENT
          </Button>
          <Button.Or />
          <Button
            positive={expenseType === TYPES.bills}
            onClick={() => handleTypeFilterChanges(TYPES.bills)}
          >
            BILLS
          </Button>
          <Button.Or />
          <Button
            positive={expenseType === TYPES.others}
            onClick={() => handleTypeFilterChanges(TYPES.others)}
          >
            OTHERS
          </Button>
        </Button.Group>
      </FilterItem>
    </Filters>
  );
};
