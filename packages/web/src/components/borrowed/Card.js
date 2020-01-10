import React from "react";
import styled from "styled-components";
import { TYPES, STATUS } from "src/modules/borrowed/borrowedList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  background-color: ${({ type }) =>
    type === TYPES.owed ? "#44f804" : "#f8a814"};
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
  ${({ type, status }) =>
    `transform: rotate(${
      status === STATUS.open ? (type === TYPES.owed ? "45deg" : "225deg") : "0"
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

export const Card = ({ borrowedItem, empty }) => {
  const { participant, amount, type, status, creationTime } = borrowedItem;

  const getStatusIcon = () => {
    if (status === STATUS.open) {
      return faArrowUp;
    } else if (status === STATUS.pending) {
      return faHourglassHalf;
    } else {
      return faCheckCircle;
    }
  };

  const getDate = () => {
    return (
      creationTime.getDate() +
      "." +
      (creationTime.getMonth() + 1) +
      "." +
      creationTime.getFullYear()
    );
  };

  return (
    <CardContainer empty={empty}>
      <Flag type={type} position />
      <DateContent>
        <LabelImage>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </LabelImage>
        {getDate()}
      </DateContent>
      <Content>{participant}</Content>
      <WhereContent>
        <Label>{type === TYPES.owed ? "TO:" : "FROM:"}</Label>
      </WhereContent>
      <AmountContent>
        {amount}
        <LabelImage>
          <FontAwesomeIcon icon={faDollarSign} />
        </LabelImage>
      </AmountContent>
      <Flag type={type}>
        <ImageContainer type={type} status={status}>
          <FontAwesomeIcon icon={getStatusIcon()} size="3x" />
        </ImageContainer>
        <Label>{type === TYPES.owed ? "LEND" : "BORROW"}</Label>
      </Flag>
    </CardContainer>
  );
};
