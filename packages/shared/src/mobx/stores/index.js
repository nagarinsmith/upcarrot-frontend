import { types } from "mobx-state-tree";
import authStore from "./auth";
import expenseStore from "./expense";

export const stores = {
  auth: types.optional(authStore, {}),
  expense: types.optional(expenseStore, {}),
  example: "Salut "
};
