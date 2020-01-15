import React, { Component } from "react";
import SpinnerLoader from "src/components/loader/SpinnerLoader.js";
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
        <SpinnerLoader></SpinnerLoader>
      </div>
    );
  }
}
