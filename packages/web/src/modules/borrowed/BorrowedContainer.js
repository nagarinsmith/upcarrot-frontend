import React, { useState, useMemo } from "react";
import { BorrowedWrapper, BorrowedFilters, Card } from "src/components/index";
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

const BorrowedContainer = ({ borrowedList, closeBorrow }) => {
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
      .map(item => (
        <Card borrowedItem={item} closeBorrow={closeBorrow} key={item.id} />
      ));
  });

  return (
    <BorrowedWrapper>
      {
        borrowedList.length ?
        <BorrowedFilters
        typeFilter={typeFilter}
        statusFilter={statusFilter}
        handleTypeFilterChanges={handleTypeFilterChanges}
        handleStatusFilterChanges={handleStatusFilterChanges}
        /> : null
      }
      {list}
      {list.length === 0 && <Empty />}
      {(borrowedList.length % 2 === 1 && list.length > 0) && <Card borrowedItem={emptyItem} empty />}
    </BorrowedWrapper>
  );
};

export default BorrowedContainer;
