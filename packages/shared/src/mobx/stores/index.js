import { types } from "mobx-state-tree";
import authStore from "./auth";
import expenseStore from "./expense";
import eventStore from "./events";
export const stores = {
  auth: types.optional(authStore, {}),
  expense: types.optional(expenseStore, {}),
  events: types.optional(eventStore, {}),
  example: "Salut "
};
