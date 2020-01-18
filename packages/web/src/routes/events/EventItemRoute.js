import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EventItemContainer from "src/modules/event/EventItemContainer";

@inject("store")
@observer
export default class Event extends Component {
  componentDidMount() {
    const {
      store: {
        events: { getAll }
      }
    } = this.props;

    getAll();
  }
  state = {};
  render() {
    const {
      store: {
        events: { getEventById, addExpense, deleteExpense, splitExpenses }
      },
      match: {
        params: { id }
      },
      history
    } = this.props;

    return (
      <EventItemContainer
        event={getEventById(id)}
        addExpense={addExpense}
        splitExpenses={splitExpenses}
        deleteExpense={deleteExpense}
        navigateEvents={() => history.push("/events")}
      />
    );
  }
}
