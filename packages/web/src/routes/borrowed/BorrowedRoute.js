import React, { Component } from "react";
import BorrowedContainer from "src/modules/borrowed/BorrowedContainer";
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
        expense: { getBorrowed, closeBorrow }
      }
    } = this.props;

    return (
      <BorrowedContainer borrowedList={getBorrowed} closeBorrow={closeBorrow} />
    );
  }
}
