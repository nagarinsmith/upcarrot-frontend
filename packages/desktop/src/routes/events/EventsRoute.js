import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
export default class EventsRoute extends Component {
  render() {
    return <div>Waaa</div>;
  }
}
