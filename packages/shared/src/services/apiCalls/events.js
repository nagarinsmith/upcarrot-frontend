// Here we will make our api calls regarding authentication
export default function getEventsApiCalls(api) {
  return {
    getAllEvents: ({ email, password }) => api.get("/events"),
    addEvent: expense => api.post("/events", expense),
    deleteEvent: ({ id }) => api.delete(`/expenses/${id}`)
  };
}
// here we export each name for each api call - maybe we will generate those
export const callNames = {
  GET_ALL: "getAllEvents",
  ADD_EVENT: "addEvent",
  ADD_BORROW: "addBorrow",
  DELETE_EVENT: "deleteEvent"
};
