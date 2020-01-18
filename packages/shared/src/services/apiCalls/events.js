// Here we will make our api calls regarding authentication
export default function getEventsApiCalls(api) {
  return {
    getAllEvents: ({ email, password }) => api.get("/events"),
    addEvent: expense => api.post("/events", expense),
    deleteEvent: ({ id }) => api.delete(`/events/${id}`),
    splitExpenses: ({ id }) => api.put(`/events/close/${id}`),
    addExpenseEvent: ({ id, expense }) =>
      api.put(`/events/add_expense/${id}`, expense),
    deleteExpenseEvent: ({ id, eventId }) =>
      api.delete(`/events/${eventId}/expense/${id}`)
  };
}
// here we export each name for each api call - maybe we will generate those
export const callNames = {
  GET_ALL: "getAllEvents",
  ADD_EVENT: "addEvent",
  ADD_EXPENSE: "addExpenseEvent",
  ADD_BORROW: "addBorrow",
  DELETE_EVENT: "deleteEvent",
  SPLIT_EXPENSES: "splitExpenses",
  DELETE_EXPENSE: "deleteExpenseEvent"
};
