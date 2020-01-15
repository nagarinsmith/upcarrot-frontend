import React from "react";
import styled from "styled-components";
import { TYPES } from "src/modules/borrowed/expenseConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as moment from "moment";
import {
  faHamburger,
  faShoppingCart,
  faFileInvoice,
  faHome,
  faBoxOpen,
  faCalendarAlt,
  faDollarSign,
  faTimes
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
  background-color: ${({ category }) => categoryColors[category]};
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
  font-weight: 700;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const CloseButton = styled.div`
  background-color: #ff4a4a;
  position: absolute;
  top: -12px;
  right: -12px;
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

export const typeIcon = {
  [TYPES.food]: faHamburger,
  [TYPES.shopping]: faShoppingCart,
  [TYPES.bills]: faFileInvoice,
  [TYPES.rent]: faHome,
  [TYPES.others]: faBoxOpen
};

const categoryColors = {
  BILLS: "#81BEF1",
  RENT: "#EB5972",
  FOOD: "#AD8BF2",
  SHOPPING: "#6FF2C5",
  OTHERS: "#BFF287"
};

export const Card = ({ expenseItem, empty, deleteExpense }) => {
  const { id, description, total, category, date } = expenseItem;
  return (
    <CardContainer empty={empty}>
      <Flag category={category} position>
        <FontAwesomeIcon icon={typeIcon[category]} size="3x" />
      </Flag>
      <CloseButton onClick={() => deleteExpense(id)}>
        <FontAwesomeIcon icon={faTimes} />
      </CloseButton>
      <DateContent>
        <LabelImage>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </LabelImage>
        {moment(date).format("DD.MM.YYYY")}
      </DateContent>
      <Content>{description}</Content>
      <WhereContent>
        <Label>DESCRIPTION</Label>
      </WhereContent>
      <AmountContent>
        {total}
        <LabelImage>
          <FontAwesomeIcon icon={faDollarSign} />
        </LabelImage>
      </AmountContent>
      <Flag category={category}>
        <Label>{category}</Label>
      </Flag>
    </CardContainer>
  );
};
