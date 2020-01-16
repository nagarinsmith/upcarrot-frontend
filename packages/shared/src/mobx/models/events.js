import { types } from "mobx-state-tree";
import expense from "./expense";

// Models used for storing data -> just plain data, no actions
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
    status: "close"
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
    status: "open"
  }
];
const event = types.model("Event", {
  id: types.optional(types.union(types.string, types.number), ""),
  listOfUsers: types.optional(types.array(types.string), []),
  listOfExpenses: types.optional(types.array(expense), []),
  name: types.optional(types.string, ""),
  date: types.optional(types.string, ""),
  status: types.maybeNull(types.optional(types.string, ""))
});

export default event;
