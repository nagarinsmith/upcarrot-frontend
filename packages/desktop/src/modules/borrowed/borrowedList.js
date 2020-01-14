export const STATUS = {
  open: "OPEN",
  pending: "PENDING",
  closed: "CLOSED"
};

export const TYPES = {
  borrowed: "BORROWED",
  owed: "OWED"
};

export const borrowedList = [
  {
    id: "1",
    name: "johnDoe@email.com1",
    otherParticipant: "johnDoe@email.com2",
    amount: "100",
    type: TYPES.borrowed,
    status: STATUS.open,
    date: new Date()
  },
  {
    id: "2",
    name: "johnDoe@email.com3",
    otherParticipant: "johnDoe@email.com4",
    amount: "101",
    type: TYPES.owed,
    status: STATUS.pending,
    date: new Date()
  },
  {
    id: "3",
    name: "johnDoe@email.com5",
    otherParticipant: "johnDoe@email.com6",
    amount: "102",
    type: TYPES.owed,
    status: STATUS.closed,
    date: new Date()
  },
  {
    id: "4",
    name: "johnDoe@email.com7",
    otherParticipant: "johnDoe@email.com8",
    amount: "103",
    type: TYPES.owed,
    status: STATUS.closed,
    date: new Date()
  },
  {
    id: "5",
    name: "johnDoe@email.com9",
    otherParticipant: "johnDoe@email.com10",
    amount: "104",
    type: TYPES.borrowed,
    status: STATUS.pending,
    date: new Date()
  },
  {
    id: "6",
    name: "johnDoe@email.com11",
    otherParticipant: "johnDoe@email.com12",
    amount: "105",
    type: TYPES.owed,
    status: STATUS.open,
    date: new Date()
  },
  {
    id: "7",
    name: "johnDoe@email.com13",
    otherParticipant: "johnDoe@email.com14",
    amount: "106",
    type: TYPES.owed,
    status: STATUS.closed,
    date: new Date()
  },
  {
    id: "8",
    name: "johnDoe@email.com15",
    otherParticipant: "johnDoe@email.com16",
    amount: "107",
    type: TYPES.borrowed,
    status: STATUS.pending,
    date: new Date()
  },
  {
    id: "9",
    name: "johnDoe@email.com17",
    otherParticipant: "johnDoe@email.com18",
    amount: "108",
    type: TYPES.borrowed,
    status: STATUS.open,
    date: new Date()
  },
  {
    id: "10",
    name: "johnDoe@email.com19",
    otherParticipant: "johnDoe@email.com20",
    amount: "109",
    type: TYPES.borrowed,
    status: STATUS.closed,
    date: new Date()
  },
  {
    id: "11",
    name: "johnDoe@email.com21",
    otherParticipant: "johnDoe@email.com22",
    amount: "110",
    type: TYPES.owed,
    status: STATUS.closed,
    date: new Date()
  },
  {
    id: "12",
    name: "johnDoe@email.com23",
    otherParticipant: "johnDoe@email.com24",
    amount: "111",
    type: TYPES.borrowed,
    status: STATUS.pending,
    date: new Date()
  },
  {
    id: "13",
    name: "johnDoe@email.com25",
    otherParticipant: "johnDoe@email.com26",
    amount: "112",
    type: TYPES.owed,
    status: STATUS.open,
    date: new Date()
  }
];
