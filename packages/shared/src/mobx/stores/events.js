import { types, flow } from "mobx-state-tree";
import { Events } from "../models";
import baseStore from "./base";
import { getEnv } from "mobx-state-tree";

// Here we will add call our api service for requests *just like sagas/thunks*
const eventsStore = types
  .model("Events", {
    token: "",
    isLoading: false,
    events: types.optional(types.array(Events), [])
  })
  .views(self => ({}))
  .actions(self => ({
    setLoading: value => {
      self.isLoading = value;
    },
    setField: (field, value) => (self[field] = value),
    getAll: flow(function*() {
      self.setLoading(true);
      const eventsCalls = getEnv(self).callNames.eventCallNames;
      yield self.fetch(
        eventsCalls.GET_ALL,
        {},
        self.onGetAllSuccess,
        self.onError
      );
    }),
    addEvent: flow(function*(event) {
      self.setLoading(true);
      const eventsCalls = getEnv(self).callNames.eventCallNames;
      yield self.fetch(
        eventsCalls.ADD_EVENT,
        event,
        self.onSuccess,
        self.onError
      );
    }),
    deleteEvent: flow(function*(id) {
      self.setLoading(true);
      const eventsCalls = getEnv(self).callNames.eventCallNames;
      yield self.fetch(
        eventsCalls.DELETE_EVENT,
        { id },
        self.onSuccess,
        self.onError
      );
    }),
    splitExpenses: flow(function*(id) {
      self.setLoading(true);
      const eventsCalls = getEnv(self).callNames.eventCallNames;
      yield self.fetch(
        eventsCalls.SPLIT_EXPENSES,
        { id },
        self.onSuccess,
        self.onError
      );
    }),
    onGetAllSuccess: response => {
      self.setField("events", response);
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

const enhancedEvents = types.compose(eventsStore, baseStore);
export default enhancedEvents;
