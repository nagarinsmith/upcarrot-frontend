import React from "react";
import styled from "styled-components";
import { TYPES, STATUS } from "src/modules/borrowed/expenseConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as moment from "moment";
import {
  faArrowUp,
  faCalendarAlt,
  faDollarSign,
  faHourglassHalf,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  opacity: ${({ empty }) => empty && "0"};
  background-color: #151523;
  width: 40%;
  min-width: 250px;
  height: ${({ empty }) => (empty ? "0" : "200px")};
  margin: 40px 15px;
  padding: 10px 20px;
  position: relative;
  @media (max-width: 1000px) {
    width: 60%;
  }
`;

const Flag = styled.div`
  background-color: ${({ category }) =>
    category === TYPES.owed ? "#44f804" : "#f8a814"};
  width: 100px;
  height: 100px;
  position: absolute;
  ${({ position }) => (position ? "top" : "bottom")}: -10px;
  ${({ position }) => (position ? "left" : "right")}: -10px;
  ${({ position }) => !position && "cursor: pointer"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background-size: contain;
  ${({ position }) =>
    `background-${
      !position ? "color" : "image"
    }: url('https://api.adorable.io/avatars/285/${new Date().getMilliseconds()}')`};

  @media (max-width: 400px) {
    height: 60px;
    width: 60px;
  }
  @media (max-width: 600px) {
    height: 60px;
    width: 60px;
  }

  @media (max-width: 800px) {
    height: 80px;
    width: 80px;
  }
`;

const ImageContainer = styled.div`
  ${({ category, status }) =>
    `transform: rotate(${
      status === STATUS.open
        ? category === TYPES.owed
          ? "45deg"
          : "225deg"
        : "0"
    })`};
`;

const LabelImage = styled.div`
  margin-right: 8px;
`;

const Content = styled.div`
  position: absolute;
  top: 100px;
  left: 60px;
`;

const WhereContent = styled.div`
  top: 70px;
  left: 100px;
  font-size: 20px;
  position: absolute;
  font-weight: 700;
`;

const DateContent = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
`;

const AmountContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  font-size: 20px;
`;

const Label = styled.label`
  letter-spacing: 2px;
`;

const statusIcon = {
  [STATUS.open]: faArrowUp,
  [STATUS.pending]: faHourglassHalf,
  [STATUS.closed]: faCheckCircle
};

export const Card = ({ borrowedItem, closeBorrow, empty }) => {
  const { id, otherParticipant, total, category, status, date } = borrowedItem;

  return (
    <CardContainer empty={empty}>
      <Flag category={category} position />
      <DateContent>
        <LabelImage>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </LabelImage>
        {moment(date).format("DD.MM.YYYY")}
      </DateContent>
      <Content>{otherParticipant}</Content>
      <WhereContent>
        <Label>{category === TYPES.owed ? "TO:" : "FROM:"}</Label>
      </WhereContent>
      <AmountContent>
        {total}
        <LabelImage>
          <FontAwesomeIcon icon={faDollarSign} />
        </LabelImage>
      </AmountContent>
      <Flag
        category={category}
        onClick={status === STATUS.open && (() => closeBorrow(id))}
      >
        <ImageContainer category={category} status={status}>
          <FontAwesomeIcon icon={statusIcon[status]} size="3x" />
        </ImageContainer>
        <Label>{category === TYPES.owed ? "LEND" : "BORROW"}</Label>
      </Flag>
    </CardContainer>
  );
};
