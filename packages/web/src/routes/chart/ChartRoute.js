import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import ChartContainer from "src/modules/chart/ChartContainer";

@inject("store")
@observer
export default class Chart extends Component {
  state = {};
  render() {
    const {
      store: { auth, example }
    } = this.props;
    return (
      <div>
        <ChartContainer/>;
      </div>
    );
  }
}
