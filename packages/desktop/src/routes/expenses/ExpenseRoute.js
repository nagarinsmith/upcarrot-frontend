import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ExpenseContainer from "src/modules/expense/ExpenseContainer";

@inject("store")
@observer
export default class Expense extends Component {
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
        expense: { getExpenses }
      }
    } = this.props;

    return (
      <div>
        <ExpenseContainer expenseList={getExpenses} />
      </div>
    );
  }
}
