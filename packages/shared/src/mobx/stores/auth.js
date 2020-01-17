import { types, flow } from "mobx-state-tree";
import { User } from "../models";
import baseStore from "./base";
import { getEnv } from "mobx-state-tree";

// Here we will add call our api service for requests *just like sagas/thunks*
const authStore = types
  .model("Auth", {
    token: "",
    isLoading: true,
    userData: types.optional(User, {})
  })
  .views(self => ({
    get isLoggedIn() {
      return !!self.token;
    }
  }))
  .actions(self => ({
    afterCreate: flow(function*() {
      self.token = yield self.getFromStorage("access_token");
      if (self.token) self.setLoading(false);
    }),
    setLoading: value => {
      self.isLoading = value;
    },
    setField: (field, value) => (self[field] = value),
    login: flow(function* login(email, password) {
      const authCalls = getEnv(self).callNames.authCallNames;
      yield self.fetch(
        authCalls.LOGIN,
        { email, password },
        self.onLoginSuccess,
        self.onError
      );
    }),
    register: flow(function* login(email = "oare", password = "merge") {
      const authCalls = getEnv(self).callNames.authCallNames;
      yield self.fetch(
        authCalls.REGISTER,
        { email, password },
        self.onLoginSuccess,
        self.onError
      );
    }),
    onLoginSuccess: response => {
      self.setField("token", response.access_token);
      self.setInStorage("access_token", response.access_token);
      self.setLoading(false);
    },

    onError: error => {
      console.log("AUTH ERROR", error);
      // self.setField("error", error.originalError);
      self.setLoading(false);
    },
    logout: flow(function*() {
      self.setLoading(true);
      self.setField("token", "");
      yield self.removeFromStorage("access_token");
      self.setLoading(false);
    }),
    refresh: flow(function*() {
      self.token = yield self.getFromStorage("access_token");
      if (self.token) self.setLoading(false);
    })
  }));

const enhancedAuth = types.compose(authStore, baseStore);
export default enhancedAuth;
