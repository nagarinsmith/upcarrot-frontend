import React, { useMemo, useState } from "react";
import { EventWrapper } from "src/components/events/EventWrapper";
import { Card } from "src/components/events/Card";
import { EventFilters } from "src/components/events/EventFilters";
import Empty from "src/routes/common/Empty";

const EventContainer = ({ events, deleteEvent, splitExpenses }) => {
  const [statusFilter, setStatusFilter] = useState(null);
  console.log(statusFilter, events);
  const eventList = useMemo(() => {
    return events
      .filter(item => (statusFilter ? item.status === statusFilter : true))
      .map(item => (
        <Card
          eventItem={item}
          deleteEvent={deleteEvent}
          splitExpenses={splitExpenses}
        />
      ));
  });

  const handleStatusFilterChanges = value => {
    if (value === statusFilter) {
      setStatusFilter(null);
    } else {
      setStatusFilter(value);
    }
  };

  return (
    <EventWrapper>
      <EventFilters
        status={statusFilter}
        handleStatusFilterChanges={handleStatusFilterChanges}
      />
      {eventList.length === 0 && <Empty />}
      {eventList}
    </EventWrapper>
  );
};

export default EventContainer;
