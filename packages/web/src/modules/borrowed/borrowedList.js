export const STATUS = {
  open: "open",
  pending: "pending",
  closed: "closed"
};

export const TYPES = {
  borrowed: "borrowed",
  owed: "owed"
};

export const borrowedList = [
  {
    id: "1",
    name: "johnDoe@email.com1",
    participant: "johnDoe@email.com2",
    amount: "100",
    type: TYPES.borrowed,
    status: STATUS.open,
    creationTime: new Date()
  },
  {
    id: "2",
    name: "johnDoe@email.com3",
    participant: "johnDoe@email.com4",
    amount: "101",
    type: TYPES.owed,
    status: STATUS.pending,
    creationTime: new Date()
  },
  {
    id: "3",
    name: "johnDoe@email.com5",
    participant: "johnDoe@email.com6",
    amount: "102",
    type: TYPES.owed,
    status: STATUS.closed,
    creationTime: new Date()
  },
  {
    id: "4",
    name: "johnDoe@email.com7",
    participant: "johnDoe@email.com8",
    amount: "103",
    type: TYPES.owed,
    status: STATUS.closed,
    creationTime: new Date()
  },
  {
    id: "5",
    name: "johnDoe@email.com9",
    participant: "johnDoe@email.com10",
    amount: "104",
    type: TYPES.borrowed,
    status: STATUS.pending,
    creationTime: new Date()
  },
  {
    id: "6",
    name: "johnDoe@email.com11",
    participant: "johnDoe@email.com12",
    amount: "105",
    type: TYPES.owed,
    status: STATUS.open,
    creationTime: new Date()
  },
  {
    id: "7",
    name: "johnDoe@email.com13",
    participant: "johnDoe@email.com14",
    amount: "106",
    type: TYPES.owed,
    status: STATUS.closed,
    creationTime: new Date()
  },
  {
    id: "8",
    name: "johnDoe@email.com15",
    participant: "johnDoe@email.com16",
    amount: "107",
    type: TYPES.borrowed,
    status: STATUS.pending,
    creationTime: new Date()
  },
  {
    id: "9",
    name: "johnDoe@email.com17",
    participant: "johnDoe@email.com18",
    amount: "108",
    type: TYPES.borrowed,
    status: STATUS.open,
    creationTime: new Date()
  },
  {
    id: "10",
    name: "johnDoe@email.com19",
    participant: "johnDoe@email.com20",
    amount: "109",
    type: TYPES.borrowed,
    status: STATUS.closed,
    creationTime: new Date()
  },
  {
    id: "11",
    name: "johnDoe@email.com21",
    participant: "johnDoe@email.com22",
    amount: "110",
    type: TYPES.owed,
    status: STATUS.closed,
    creationTime: new Date()
  },
  {
    id: "12",
    name: "johnDoe@email.com23",
    participant: "johnDoe@email.com24",
    amount: "111",
    type: TYPES.borrowed,
    status: STATUS.pending,
    creationTime: new Date()
  },
  {
    id: "13",
    name: "johnDoe@email.com25",
    participant: "johnDoe@email.com26",
    amount: "112",
    type: TYPES.owed,
    status: STATUS.open,
    creationTime: new Date()
  }
];
