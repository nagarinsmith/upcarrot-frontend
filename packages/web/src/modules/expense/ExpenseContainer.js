import React, { useState, useMemo } from "react";
import {
  ExpenseListWrapper,
  ExpenseFilters,
  ExpenseCard
} from "src/components/index";
import { Card } from "src/components/expenses/Card";

const emptyItem = {
  id: "",
  name: "",
  otherParticipant: "",
  amount: "",
  type: "",
  status: "",
  date: new Date()
};

const ExpenseContainer = ({ expenseList }) => {
  const [typeFilter, setTypeFilter] = useState(null);

  const handleTypeFilterChanges = value => {
    if (value === typeFilter) {
      setTypeFilter(null);
    } else {
      setTypeFilter(value);
    }
  };

  const list = useMemo(() => {
    return expenseList
      .filter(item => (typeFilter ? item.category === typeFilter : true))
      .map(item => <ExpenseCard expenseItem={item} key={item.id} />);
  });

  return (
    <ExpenseListWrapper>
      <ExpenseFilters
        expenseType={typeFilter}
        handleTypeFilterChanges={handleTypeFilterChanges}
      />
      {list}
      {expenseList.length % 2 === 1 && <Card expenseItem={emptyItem} empty />}
    </ExpenseListWrapper>
  );
};

export default ExpenseContainer;
