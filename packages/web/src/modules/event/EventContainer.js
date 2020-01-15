import React, { useMemo } from "react";
import { EventWrapper } from "src/components/events/EventWrapper";
import { Card } from "src/components/events/Card";

const list = [
  {
    id: 1,
    listOfUsers: ["alex@mail.com", "misu@mail.com", "bruno@mail.com"],
    listOfExpenses: [
      {
        id: "6",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "OPEN"
      },
      {
        id: "7",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "8",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "9",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "CLOSED"
      }
    ],
    name: "Cabana",
    date: "2018-02-23T12:32:12Z",
    status: "CLOSED"
  },
  {
    id: 2,
    listOfUsers: ["alex@mail.com", "misu@mail.com", "bruno@mail.com"],
    listOfExpenses: [
      {
        id: "6",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "OPEN"
      },
      {
        id: "7",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "8",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "9",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "CLOSED"
      }
    ],
    name: "Banchet",
    date: "2020-06-14T12:32:12Z",
    status: "OPEN"
  },
  {
    id: 1,
    listOfUsers: ["alex@mail.com", "misu@mail.com", "bruno@mail.com"],
    listOfExpenses: [
      {
        id: "6",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "OPEN"
      },
      {
        id: "7",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "8",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "9",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "CLOSED"
      }
    ],
    name: "Cabana",
    date: "2018-02-23T12:32:12Z",
    status: "CLOSED"
  },
  {
    id: 2,
    listOfUsers: ["alex@mail.com", "misu@mail.com", "bruno@mail.com"],
    listOfExpenses: [
      {
        id: "6",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "OPEN"
      },
      {
        id: "7",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "8",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "9",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "CLOSED"
      }
    ],
    name: "Banchet",
    date: "2020-06-14T12:32:12Z",
    status: "OPEN"
  },
  {
    id: 1,
    listOfUsers: ["alex@mail.com", "misu@mail.com", "bruno@mail.com"],
    listOfExpenses: [
      {
        id: "6",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "OPEN"
      },
      {
        id: "7",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "8",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "9",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "CLOSED"
      }
    ],
    name: "Cabana",
    date: "2018-02-23T12:32:12Z",
    status: "CLOSED"
  },
  {
    id: 2,
    listOfUsers: ["alex@mail.com", "misu@mail.com", "bruno@mail.com"],
    listOfExpenses: [
      {
        id: "6",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "OPEN"
      },
      {
        id: "7",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "8",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "PENDING"
      },
      {
        id: "9",
        user: "alex@email.com",
        description: "Mic dejun",
        total: 23,
        category: "OWED",
        date: "2020-01-13T18:48:43.950Z",
        otherParticipant: "lapte1234@email.com",
        status: "CLOSED"
      }
    ],
    name: "Banchet",
    date: "2020-06-14T12:32:12Z",
    status: "OPEN"
  }
];

const EventContainer = ({ events }) => {
  const eventList = useMemo(() => {
    return list.map(item => <Card eventItem={item} />);
  });

  return <EventWrapper>{eventList}</EventWrapper>;
};

export default EventContainer;
