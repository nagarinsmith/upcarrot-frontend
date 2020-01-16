import authCalls, { callNames as authCallNames } from "./auth";
import expenseCalls, { callNames as expenseCallNames } from "./expense";
import eventsCalls, { callNames as eventCallNames } from "./events";
export default {
  authCalls,
  expenseCalls,
  eventsCalls
};

export const apiCallNames = { authCallNames, expenseCallNames, eventCallNames };
