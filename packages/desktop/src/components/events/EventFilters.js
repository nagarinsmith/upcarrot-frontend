import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

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

export const EventFilters = ({ status, handleStatusFilterChanges }) => {
  return (
    <Filters>
      <FilterItem>
        <Button.Group toggle>
          <Button
            positive={status === "OPEN"}
            onClick={() => handleStatusFilterChanges("OPEN")}
          >
            OPEN
          </Button>
          <Button.Or />
          <Button
            positive={status === "CLOSED"}
            onClick={() => handleStatusFilterChanges("CLOSED")}
          >
            CLOSED
          </Button>
        </Button.Group>
      </FilterItem>
    </Filters>
  );
};
