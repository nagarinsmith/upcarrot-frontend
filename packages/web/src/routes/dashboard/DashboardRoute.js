import React, { Component } from "react";
import { Link } from "react-router-dom";

import { observer, inject } from "mobx-react";
import DashboardContainer from "src/modules/dashboard/DashboardContainer";

@inject("store")
@observer
export default class Dashboard extends Component {
  state = {};
  render() {
    const {
      store: { auth, example }
    } = this.props;
    return (
      <div>
        <DashboardContainer auth={auth} />;
      </div>
    );
  }
}
