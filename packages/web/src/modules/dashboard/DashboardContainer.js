import React, { Component } from "react";
import Empty from "src/routes/common/Empty";

// one dumb component in which we pass props and actions
export default class DashboardContainer extends Component {
  state = {};

  render() {
    const {
      auth: { logout }
    } = this.props;
  
    return (
      <Empty></Empty>
    );
  }
}
