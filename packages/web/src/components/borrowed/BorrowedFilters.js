import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { TYPES, STATUS } from "src/modules/borrowed/borrowedList";

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 40px 55px 10px 55px;
  min-width: 400px;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

const FilterItem = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const BorrowedFilters = ({
  typeFilter,
  statusFilter,
  handleStatusFilterChanges,
  handleTypeFilterChanges
}) => {
  return (
    <Filters>
      <FilterItem>
        <Button.Group toggle>
          <Button
            positive={typeFilter === TYPES.borrowed}
            onClick={() => handleTypeFilterChanges(TYPES.borrowed)}
          >
            BORROWED
          </Button>
          <Button.Or />
          <Button
            positive={typeFilter === TYPES.owed}
            onClick={() => handleTypeFilterChanges(TYPES.owed)}
          >
            OWED
          </Button>
        </Button.Group>
      </FilterItem>
      <FilterItem>
        <Button.Group toggle>
          <Button
            positive={statusFilter === STATUS.open}
            onClick={() => handleStatusFilterChanges(STATUS.open)}
          >
            open
          </Button>
          <Button.Or />
          <Button
            positive={statusFilter === STATUS.pending}
            onClick={() => handleStatusFilterChanges(STATUS.pending)}
          >
            PENDING
          </Button>
          <Button.Or />
          <Button
            positive={statusFilter === STATUS.closed}
            onClick={() => handleStatusFilterChanges(STATUS.closed)}
          >
            CLOSED
          </Button>
        </Button.Group>
      </FilterItem>
    </Filters>
  );
};
