import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EventContainer from "src/modules/event/EventContainer";

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
        events: { getAllEvents, deleteEvent, splitExpenses }
      }
    } = this.props;
    return (
      <EventContainer
        events={getAllEvents}
        deleteEvent={deleteEvent}
        splitExpenses={splitExpenses}
      />
    );
  }
}
