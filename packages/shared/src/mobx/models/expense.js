import { types } from "mobx-state-tree";

// Models used for storing data -> just plain data, no actions

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
