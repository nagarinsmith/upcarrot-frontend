import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import AnalyticContainer from "src/modules/chart/AnalyticContainer";

@inject("store")
@observer
export default class Analytic extends Component {
  componentDidMount() {
    const {
      store: {
        expense: { getAll }
      }
    } = this.props;

    getAll();
  }

  state = {};
  render() {
    const {
      store: {
        expense: { getExpenses, getBorrowed }
      }
    } = this.props;

    return (
      <div>
        <AnalyticContainer expenses={getExpenses} borrows={getBorrowed} />
      </div>
    );
  }
}
