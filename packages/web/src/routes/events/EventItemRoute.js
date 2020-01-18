import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EventItemContainer from "src/modules/event/EventItemContainer";
import { withRouter } from "react-router";

@inject("store")
@observer
// @withRouter
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
        events: { getEventById, deleteEvent, events }
      },
      match: {
        params: { id }
      }
    } = this.props;

    return <EventItemContainer event={getEventById(id)} />;
  }
}
