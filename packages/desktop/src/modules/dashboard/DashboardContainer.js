import React, { Component } from "react";

// one dumb component in which we pass props and actions
export default class DashboardContainer extends Component {
  state = {};
  render() {
    const {
      auth: { logout }
    } = this.props;
    return (
      <div>
        dashboard <div onClick={logout}>Logout</div>
      </div>
    );
  }
}
