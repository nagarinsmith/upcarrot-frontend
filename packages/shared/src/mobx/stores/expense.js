import { types, flow, getSnapshot } from "mobx-state-tree";
import { Expense } from "../models";
import baseStore from "./base";
import { getEnv } from "mobx-state-tree";

// Here we will add call our api service for requests *just like sagas/thunks*
const expenseStore = types
  .model("Auth", {
    token: "",
    isLoading: false,
    expenses: types.optional(types.array(Expense), [])
  })
  .views(self => ({
    get isLoggedIn() {
      return !!self.token;
    },
    get getBorrowed() {
      return getSnapshot(self.expenses).filter(
        item => item.category === "OWED" || item.category === "BORROWED"
      );
    },
    get getExpenses() {
      return getSnapshot(self.expenses).filter(
        item => item.category !== "OWED" && item.category !== "BORROWED"
      );
    }
  }))
  .actions(self => ({
    setLoading: value => {
      self.isLoading = value;
    },
    setField: (field, value) => (self[field] = value),
    addBorrow: flow(function*(borrow) {
      self.setLoading(true);
      const expenseCalls = getEnv(self).callNames.expenseCallNames;
      yield self.fetch(
        expenseCalls.ADD_BORROW,
        { ...borrow, status: "PENDING" },
        self.onSuccess,
        self.onError
      );
    }),
    getAll: flow(function* getAll(email, password) {
      self.setLoading(true);
      const expenseCalls = getEnv(self).callNames.expenseCallNames;
      yield self.fetch(
        expenseCalls.GET_ALL,
        {},
        self.onGetAllSuccess,
        self.onError
      );
    }),
    addExpense: flow(function* addExpense(expense) {
      self.setLoading(true);
      const expenseCalls = getEnv(self).callNames.expenseCallNames;
      yield self.fetch(
        expenseCalls.ADD_EXPENSE,
        expense,
        self.onSuccess,
        self.onError
      );
    }),
    deleteExpense: flow(function* deleteExpense(id) {
      self.setLoading(true);
      const expenseCalls = getEnv(self).callNames.expenseCallNames;
      yield self.fetch(
        expenseCalls.DELETE_EXPENSE,
        { id },
        self.onSuccess,
        self.onError
      );
    }),
    closeBorrow: flow(function* closeBorrow(id) {
      self.setLoading(true);
      const expenseCalls = getEnv(self).callNames.expenseCallNames;
      yield self.fetch(
        expenseCalls.CLOSE_BORROW,
        { id },
        self.onSuccess,
        self.onError
      );
    }),
    onGetAllSuccess: response => {
      self.setField("expenses", response.data);
      self.setLoading(false);
    },
    onError: error => {
      console.log("AUTH ERROR", error);
      self.setField("error", error.originalError);
      self.setLoading(false);
    },
    onSuccess: response => {
      self.getAll();
    }
  }));

const enhancedAuth = types.compose(expenseStore, baseStore);
export default enhancedAuth;
