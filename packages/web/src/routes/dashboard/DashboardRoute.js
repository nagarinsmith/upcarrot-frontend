import React, { Component } from "react";

import { observer, inject } from "mobx-react";
import DashboardContainer from "src/modules/dashboard/DashboardContainer";

@inject("store")
@observer
export default class Dashboard extends Component {
  componentDidMount() {
    const {
      store: {
        events: { getAll },
        expense: { getAll: getAllExpenses }
      }
    } = this.props;

    getAll();
    getAllExpenses();
  }

  render() {
    const {
      store: {
        auth,
        example,
        expense: { getExpenses, getBorrowed },
        events: { getAllEvents }
      }
    } = this.props;
    return (
      <div>
        <DashboardContainer
          auth={auth}
          getExpenses={getExpenses}
          getBorrow={getBorrowed}
          getEvents={getAllEvents}
        />
      </div>
    );
  }
}
