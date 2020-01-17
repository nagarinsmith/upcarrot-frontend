import React, { useState } from "react";
import styled from "styled-components";
import ExpenseContainer from "../expense/ExpenseContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCalendarAlt,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { Card as UserCard } from "src/components/events/UserCard";
import { Modal } from "src/components/index";
import AddExpenseContainer from "../expense/AddExpenseContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  align-items: flex-end;
`;

const NameContainer = styled.div`
  display: flex;
  font-size: 40px;
  align-items: flex-end;
  height: 60px;
  align-items: flex-end;
  align-content: flex-end;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Date = styled.div`
  font-size: 18px;
  svg {
    margin-right: 10px;
  }
`;

const CloseButton = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  height: 20px;
  width: 20px;
  font-size: 10px;
  margin-left: 10px;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

const Title = styled.div`
  font-size: 20px;
  padding: 20px 20px 0;
  display: flex;
`;

const UserContainer = styled.div``;

const EventItemContainer = ({ event = {}, closeEvent }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <NameContainer>
          {event && event.name}
          <CloseButton
            onClick={closeEvent}
            color="#ff4a4a"
            hoverColor="#ff6666"
          >
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </NameContainer>
        <Date>
          <FontAwesomeIcon icon={faCalendarAlt} />
          {moment(event.date).format("DD.MM.YYYY")}
        </Date>
      </HeaderContainer>
      <Title>Users:</Title>
      <UserContainer>
        {(event.listOfUsers || []).map(user => (
          <UserCard user={user} />
        ))}
      </UserContainer>
      <Title>
        Expenses:{" "}
        <CloseButton
          onClick={() => setOpen(true)}
          color="#44f804"
          hoverColor="#BFF287"
        >
          <FontAwesomeIcon icon={faPlus} />
        </CloseButton>
      </Title>
      <ExpenseContainer expenseList={(event && event.listOfExpenses) || []} />
      <Modal isOpen={isOpen} title="Add new Event" close={() => setOpen(false)}>
        {isOpen && (
          <AddExpenseContainer
            close={() => setOpen(false)}
            addExpense={() => console.log(event.id)}
          />
        )}
      </Modal>
    </Container>
  );
};

export default EventItemContainer;
