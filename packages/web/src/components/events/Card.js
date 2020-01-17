import React from "react";
import styled from "styled-components";
import * as moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCalendarAlt,
  faDoorOpen,
  faDoorClosed
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  background-color: #151523;
  width: 20%;
  min-width: 260px;
  margin: 40px;
  padding: 10px 20px;
  position: relative;
  height: 200px;
  cursor: pointer;
  *:hover {
    color: white;
  }
`;

const DateContent = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 18px;
`;

const LabelImage = styled.div`
  margin-right: 8px;
`;

const Label = styled.div`
  display: flex;
  margin: 10px 0;
  font-size: 18px;
`;

const ImageContainer = styled.div`
  margin: 5px 0;
`;

const Flag = styled.div`
  background-color: ${({ status }) =>
    status === "CLOSED" ? "#ff4a4a" : "#44f804"};
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: -20px;
  right: -20px;
  font-size: 16px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  letter-spacing: 2px;
`;

const CloseButton = styled.div`
  background-color: #ff4a4a;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #ff6666;
  }
`;

export const Card = ({ eventItem, splitExpenses }) => {
  const { name, listOfUsers, date, status, id } = eventItem;

  return (
    <Link to={`/events/${id}`}>
      <CardContainer>
        <CloseButton onClick={() => splitExpenses()}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <DateContent>
          <LabelImage>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </LabelImage>
          {moment(date).format("DD-MM-YYYY")}
        </DateContent>
        <Label>{name}</Label>
        <Label>Participants: {listOfUsers.length}</Label>
        <Flag status={status}>
          <ImageContainer>
            <FontAwesomeIcon
              icon={status === "CLOSED" ? faDoorClosed : faDoorOpen}
              size="2x"
            />
          </ImageContainer>
          {status}
        </Flag>
      </CardContainer>
    </Link>
  );
};
