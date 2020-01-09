import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import ChartContainer2 from "src/modules/chart/Chart2Container";

@inject("store")
@observer
export default class Chart2 extends Component {
  state = {};
  render() {
    const {
      store: { auth, example }
    } = this.props;
    return (
      <div>
        <ChartContainer2/>;
      </div>
    );
  }
}
