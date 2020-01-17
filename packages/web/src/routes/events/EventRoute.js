import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EventContainer from "src/modules/event/EventContainer";

@inject("store")
@observer
export default class Event extends Component {
  state = {};
  render() {
    const {
      store: { 
        auth, 
        example,
        events: { splitExpenses }
      }
    } = this.props;
    return <EventContainer splitExpenses={splitExpenses} />;
  }
}
