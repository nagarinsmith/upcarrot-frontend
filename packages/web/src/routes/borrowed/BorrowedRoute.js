import React, { Component } from "react";
import BorrowedContainer from "src/modules/borrowed/BorrowedContainer";
import { borrowedList } from "src/modules/borrowed/borrowedList";

export default class BorrowedRoute extends Component {
  render() {
    return <BorrowedContainer borrowedList={borrowedList} />;
  }
}
