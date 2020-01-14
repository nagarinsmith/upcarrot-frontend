import React, { useState, useMemo } from "react";
import { BorrowedWrapper, BorrowedFilters, Card } from "src/components/index";

const emptyItem = {
  id: "",
  name: "",
  otherParticipant: "",
  amount: "",
  type: "",
  status: "",
  date: new Date()
};

const BorrowedContainer = ({ borrowedList }) => {
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
    return borrowedList
      .filter(item => (statusFilter ? item.status === statusFilter : true))
      .filter(item => (typeFilter ? item.category === typeFilter : true))
      .map(item => <Card borrowedItem={item} key={item.id} />);
  });

  return (
    <BorrowedWrapper>
      <BorrowedFilters
        typeFilter={typeFilter}
        statusFilter={statusFilter}
        handleTypeFilterChanges={handleTypeFilterChanges}
        handleStatusFilterChanges={handleStatusFilterChanges}
      />
      {list}
      {/* <Card borrowedItem={emptyItem} empty={borrowedList.length % 2 === 1} /> */}
    </BorrowedWrapper>
  );
};

export default BorrowedContainer;
