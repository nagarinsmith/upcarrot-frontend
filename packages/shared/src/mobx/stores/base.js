import { types, getEnv, flow } from "mobx-state-tree";

// our base store/fetcher
const baseStore = types
  .model("BaseStore", {
    isLoading: false,
    error: types.frozen()
  })
  .views(self => ({
    hasError: () => !!self.error
  }))
  .actions(self => ({
    fetch: flow(function*(apiCall, params, onSuccess, onError) {
      self.isLoading = true;
      const response = yield getEnv(self).apiService[apiCall](params);

      if (response.ok) {
        onSuccess(response);
        self.error = {};
      } else {
        self.error = {
          problem: response.problem,
          status: response.status,
          originalError: response.originalError
        };
        onError(self.error);
      }
      self.isLoading = false;
    }),
    setInStorage: flow(function*(key, value) {
      yield getEnv(self).storage.set(key, value);
    }),
    removeFromStorage: flow(function*(key) {
      yield getEnv(self).storage.remove(key);
    }),
    getFromStorage: flow(function*(key) {
      return yield getEnv(self).storage.get(key);
    })
  }));

export default baseStore;
