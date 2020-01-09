import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Login from "./auth/LoginRoute";

import theme from "../constans/theme/theme";

import { RoutePrivate, RoutePublic } from "../components";
import Dashboard from "./dashboard/DashboardRoute";
import Analytic from "./analytic/AnalyticRoute";
import NotFound from "./common/NotFound";
import { AppWrapper } from "@/components";
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
          {/* <Header
            user={auth.userData}
            logout={auth.logout}
            location={location}
            isHome={location.pathname === "/"}
          /> */}
          <Switch>
            <RoutePrivate
              isAuthenticated={auth.isLoggedIn}
              path="/"
              to="/login"
              exact
              component={Dashboard}
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
              path="/sds"
              to="/"
              exact
              component={Analytic}
            />

            <RoutePublic
              isAuthenticated={auth.isLoggedIn}
              path="/register"
              to="dashboard"
              exact
              component={Login}
            />
            <Route component={NotFound} />
          </Switch>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}
