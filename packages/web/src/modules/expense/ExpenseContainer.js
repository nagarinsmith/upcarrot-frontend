import React, { useState, useMemo } from "react";
import {
  ExpenseListWrapper,
  ExpenseFilters,
  ExpenseCard
} from "src/components/index";
import { Card } from "src/components/expenses/Card";
import Empty from "src/routes/common/Empty";

const emptyItem = {
  id: "",
  name: "",
  otherParticipant: "",
  amount: "",
  type: "",
  status: "",
  date: new Date()
};

const ExpenseContainer = ({ expenseList, deleteExpense }) => {
  const [typeFilter, setTypeFilter] = useState(null);

  const handleTypeFilterChanges = value => {
    if (value === typeFilter) {
      setTypeFilter(null);
    } else {
      setTypeFilter(value);
    }
  };

  const list = useMemo(() => {
    if (!expenseList.length) {
      return <Empty />;
    }

    return expenseList
      .filter(item => (typeFilter ? item.category === typeFilter : true))
      .map(item => (
        <ExpenseCard
          expenseItem={item}
          key={item.id}
          deleteExpense={deleteExpense}
        />
      ));
  });

  return (
    <ExpenseListWrapper>
      {
        expenseList.length ?
        <ExpenseFilters
        expenseType={typeFilter}
        handleTypeFilterChanges={handleTypeFilterChanges}
        /> : null
      }
      {list}
      {expenseList.length % 2 === 1 && <Card expenseItem={emptyItem} empty />}
    </ExpenseListWrapper>
  );
};

export default ExpenseContainer;
