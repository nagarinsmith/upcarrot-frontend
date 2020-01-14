import React, { Component } from "react";
import BorrowedContainer from "src/modules/borrowed/BorrowedContainer";
import { borrowedList } from "src/modules/borrowed/borrowedList";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
export default class BorrowedRoute extends Component {
  componentDidMount() {
    const {
      store: {
        expense: { getAll }
      }
    } = this.props;

    getAll();
  }

  render() {
    const {
      store: {
        expense: { getBorrowed }
      }
    } = this.props;

    return <BorrowedContainer borrowedList={getBorrowed} />;
  }
}
