import React from "react";
import styled from "styled-components";
import * as moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Label = styled.div`
  display: flex;
  margin: 90px 10px 10px 10px;
  /* margin-left: 200px; */
  font-size: 18px;
`;

const Flag = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  top: -20px;
  left: -20px;
  font-size: 16px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  letter-spacing: 2px;
  background: url('https://api.adorable.io/avatars/285/${new Date().getMilliseconds()}');
  background-size: contain;

`;

export const Card = ({ user }) => {
  return (
    <Link to={`/events/${2}`} style={{}}>
      <CardContainer>
        <Label>{user}</Label>
        <Flag />
      </CardContainer>
    </Link>
  );
};
