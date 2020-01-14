import React, { useState, useMemo } from "react";
import {
  ExpenseListWrapper,
  ExpenseFilters,
  ExpenseCard
} from "src/components/index";

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
  const [statusFilter, setStatusFilter] = useState(null);

  const handleTypeFilterChanges = value => {
    if (value === typeFilter) {
      setTypeFilter(null);
    } else {
      setTypeFilter(value);
    }
  };
  const handleStatusFilterChanges = value => {
    if (value === statusFilter) {
      setStatusFilter(null);
    } else {
      setStatusFilter(value);
    }
  };

  const list = useMemo(() => {
    return expenseList
      .filter(item => (statusFilter ? item.status === statusFilter : true))
      .filter(item => (typeFilter ? item.category === typeFilter : true))
      .map(item => <ExpenseCard expenseItem={item} key={item.id} />);
  });

  return (
    <ExpenseListWrapper>
      <ExpenseFilters
        typeFilter={typeFilter}
        statusFilter={statusFilter}
        handleTypeFilterChanges={handleTypeFilterChanges}
        handleStatusFilterChanges={handleStatusFilterChanges}
      />
      {list}
      {/* <Card expenseItem={emptyItem} empty={expenseList.length % 2 === 1} /> */}
    </ExpenseListWrapper>
  );
};

export default ExpenseContainer;
