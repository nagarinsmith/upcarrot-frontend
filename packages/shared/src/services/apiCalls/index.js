import authCalls, { callNames as authCallNames } from "./auth";
import expenseCalls, { callNames as expenseCallNames } from "./expense";
export default {
  authCalls,
  expenseCalls
};

export const apiCallNames = { authCallNames, expenseCallNames };
