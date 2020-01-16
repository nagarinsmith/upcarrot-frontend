import React from "react";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCreditCard,
  faHandHoldingUsd,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const mainButtonStyles = {
  backgroundColor: "#44f804"
};

const actionButtonStyles = {
  backgroundColor: "#f8a814"
};
const FloatingActionButton = ({ addExpense, addEvent, addBorrow }) => (
  // The Fab is the main button. Pass any component to the icon prop and choose
  // either click or hover for the event (default is hover)
  <Fab
    mainButtonStyles={mainButtonStyles}
    actionButtonStyles={actionButtonStyles}
    icon={<FontAwesomeIcon icon={faPlus} />}
  >
    <Action text="Add Expense" style={actionButtonStyles} onClick={addExpense}>
      <FontAwesomeIcon icon={faCreditCard} />
    </Action>
    <Action text="Add Borrow" style={actionButtonStyles} onClick={addBorrow}>
      <FontAwesomeIcon icon={faHandHoldingUsd} />
    </Action>
    <Action text="Add Event" style={actionButtonStyles} onClick={addEvent}>
      <FontAwesomeIcon icon={faCalendarAlt} />
    </Action>
  </Fab>
);

export default FloatingActionButton;
