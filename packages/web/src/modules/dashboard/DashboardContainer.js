import React, { Component } from "react";
import Empty from "src/routes/common/Empty";
import EventsContainer from "src/modules/event/EventContainer";
import styled from "styled-components";
import BorrowedContainer from "../borrowed/BorrowedContainer";
import ExpenseContainer from "../expense/ExpenseContainer";
import moment from "moment";

const Title = styled.div`
  font-size: 20px;
  padding: 20px 20px 0;
  display: flex;
`;

// one dumb component in which we pass props and actions
const DashboardContainer = ({ getEvents, getBorrow, getExpenses }) => {
  let events = [...getEvents];
  return (
    <div>
      <Title>Expenses:</Title>
      <ExpenseContainer
        expenseList={getExpenses.filter((i, index) => index < 2)}
        hide
      />
      <Title>Events:</Title>
      <EventsContainer
        events={getEvents.filter((i, index) => index < 2)}
        hide
      />
      <Title>Borrowed:</Title>
      <BorrowedContainer
        borrowedList={getBorrow.filter((i, index) => index < 2)}
        hide
      />
    </div>
  );
};

export default DashboardContainer;
