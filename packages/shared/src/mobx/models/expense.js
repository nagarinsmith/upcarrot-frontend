import { types } from "mobx-state-tree";

// Models used for storing data -> just plain data, no actions

// {
//   "id": 2,
//   "user": "alex@email.com",
//   "description": "Mic dejun",
//   "total": 23,
//   "category": "FOOD",
//   "date": "2020-01-13T18:48:43.950Z",
//   "otherotherParticipant": null,
//   "status": null
// },

const expense = types.model("Expense", {
  id: types.optional(types.string, ""),
  user: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  category: types.optional(types.string, ""),
  date: types.optional(types.string, ""),
  otherParticipant: types.maybeNull(types.optional(types.string, "")),
  status: types.maybeNull(types.optional(types.string, "")),
  total: types.maybeNull(types.optional(types.number, 0))
});

export default expense;
