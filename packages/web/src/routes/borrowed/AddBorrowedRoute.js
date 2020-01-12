import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AddBorrowedContainer from "src/modules/borrowed/AddBorrowedContainer";

@inject("store")
@observer
export default class AddBorrowed extends Component {
  state = {};
  render() {
    const {
      store: { auth, example }
    } = this.props;
    return (
      <div>
        <AddBorrowedContainer/>
      </div>
    );
  }
}