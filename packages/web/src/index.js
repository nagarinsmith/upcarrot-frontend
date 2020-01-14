import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { createGlobalStyle } from "styled-components";
import { Router } from "react-router-dom";
import getCookie from "@/config/cookieProvider";

import App from "@/routes/App";
import * as serviceWorker from "@/serviceWorker";
import reset from "@/css/reset";
import browserHistory from "@/config/history";
import store from "shared/src/mobx";
import api from "shared/src/services/api";

const GlobalStyle = createGlobalStyle`${reset}`;
const storage = getCookie();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

const apiService = api.create(storage, () => {
  browserHistory.push("/login");
});
const stores = {
  store: store.create({}, { apiService, callNames: api.callNames, storage }),
  routing: routingStore
};

ReactDOM.render(
  <Provider {...stores}>
    <>
      <Router history={history}>
        <App />
      </Router>
      <GlobalStyle />
    </>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
