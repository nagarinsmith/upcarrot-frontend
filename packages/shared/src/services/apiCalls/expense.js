// Here we will make our api calls regarding authentication
export default function getAuthApiCalls(api) {
  return {
    getAll: ({ email, password }) => api.get("/expenses"),
    addExpense: expense => api.post("/expenses", expense)
  };
}
// here we export each name for each api call - maybe we will generate those
export const callNames = {
  GET_ALL: "getAll",
  ADD_EXPENSE: "addExpense"
};
