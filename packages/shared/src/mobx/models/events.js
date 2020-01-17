import { types } from "mobx-state-tree";
import expense from "./expense";

// Models used for storing data -> just plain data, no actions

const event = types.model("Event", {
  id: types.optional(types.union(types.string, types.number), ""),
  listOfUsers: types.optional(types.array(types.string), []),
  listOfExpenses: types.optional(types.array(expense), []),
  name: types.optional(types.string, ""),
  date: types.optional(types.string, ""),
  status: types.maybeNull(types.optional(types.string, ""))
});

export default event;
