// Here we will make our api calls regarding authentication
export default function getAuthApiCalls(api) {
  return {
    getAll: ({ email, password }) => api.get("/expense-borrowed/expenses"),
    addExpense: expense => api.post("/expense-borrowed/expenses", expense),
    deleteExpense: ({ id }) => api.delete(`/expense-borrowed/${id}`),
    closeBorrow: ({ id }) => api.put(`/borrow/close`, { id }),
    addBorrow: borrow => api.post("/expense-borrowed/borrowed", borrow) //@TODO: de schimbat
  };
}
// here we export each name for each api call - maybe we will generate those
export const callNames = {
  GET_ALL: "getAll",
  ADD_EXPENSE: "addExpense",
  DELETE_EXPENSE: "deleteExpense",
  CLOSE_BORROW: "closeBorrow",
  ADD_BORROW: "addBorrow"
};
