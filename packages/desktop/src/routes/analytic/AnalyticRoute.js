import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import AnalyticContainer from "src/modules/chart/AnalyticContainer";

@inject("store")
@observer
export default class Analytic extends Component {
  state = {};
  render() {
    const {
      store: { auth, example }
    } = this.props;
    return (
      <div>
        <AnalyticContainer />
      </div>
    );
  }
}
