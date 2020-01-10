import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AddExpenseContainer from "src/modules/expense/AddExpenseContainer";

@inject("store")
@observer
export default class Expense extends Component {
  state = {};
  render() {
    const {
      store: { auth, example }
    } = this.props;
    return (
      <div>
        <AddExpenseContainer/>
      </div>
    );
  }
}