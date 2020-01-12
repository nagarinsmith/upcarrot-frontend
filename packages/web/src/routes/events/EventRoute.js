import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AddEventContainer from "src/modules/event/AddEventContainer";

@inject("store")
@observer
export default class Event extends Component {
  state = {};
  render() {
    const {
      store: { auth, example }
    } = this.props;
    return (
      <div>
        <AddEventContainer/>
      </div>
    );
  }
}