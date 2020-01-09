import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Login from "./auth/LoginRoute";
import Register from "./auth/RegisterRoute";

import theme from "../constans/theme/theme";

import { RoutePrivate, RoutePublic } from "../components";
import Dashboard from "./dashboard/DashboardRoute";
import NotFound from "./common/NotFound";
import { AppWrapper } from "@/components";
import { withSidebar } from "src/components/layout/Sidebar";
// import Header from "@/components/layout/Header/Header";
// import PresentationRoute from "./presentation/PresentationRoute";

// try to use as much function components as possible but when using
// decorators stick to class components
@inject("routing", "store")
@withRouter
@observer
export default class App extends Component {
  render() {
    const {
      store: { auth }
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Switch>
            <RoutePrivate
              isAuthenticated={auth.isLoggedIn}
              path="/"
              to="/login"
              exact
              component={withSidebar(Dashboard)}
            />
            <RoutePublic
              isAuthenticated={auth.isLoggedIn}
              path="/login"
              to="/"
              exact
              component={Login}
            />
            <RoutePublic
              isAuthenticated={auth.isLoggedIn}
              path="/register"
              to="/"
              exact
              component={Register}
            />
            <Route component={withSidebar(NotFound)} />
          </Switch>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}
