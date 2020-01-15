import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Login from "./auth/LoginRoute";
import Register from "./auth/RegisterRoute";
import Borrowed from "./borrowed/BorrowedRoute";

import theme from "../constans/theme/theme";

import { RoutePrivate, RoutePublic } from "../components";
import Dashboard from "./dashboard/DashboardRoute";
import Analytic from "./analytic/AnalyticRoute";
import NotFound from "./common/NotFound";
import Events from "./events/EventRoute";
import { AppWrapper } from "@/components";
import { withSidebar } from "src/components/layout/Sidebar";
import { FloatingActionButton, Modal } from "src/components/index";
import Expense from "./expenses/ExpenseRoute";
import AddExpenseContainer from "src/modules/expense/AddExpenseContainer";
import AddEventContainer from "src/modules/event/AddEventContainer";
// import Header from "@/components/layout/Header/Header";
// import PresentationRoute from "./presentation/PresentationRoute";

// try to use as much function components as possible but when using
// decorators stick to class components
@inject("routing", "store")
@withRouter
@observer
export default class App extends Component {
  state = {};

  componentDidMount() {
    const {
      store: {
        auth: { refresh }
      }
    } = this.props;

    refresh();
  }

  render() {
    const {
      store: {
        auth,
        expense: { addExpense }
      }
    } = this.props;

    const { isOpenEvent, isOpenExpense } = this.state;

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
            <RoutePrivate
              isAuthenticated={auth.isLoggedIn}
              path="/expenses"
              to="/login"
              exact
              component={withSidebar(Expense)}
            />
            <RoutePrivate
              isAuthenticated={auth.isLoggedIn}
              path="/analytics"
              to="/login"
              exact
              component={withSidebar(Analytic)}
            />
            <RoutePublic
              isAuthenticated={auth.isLoggedIn}
              path="/register"
              to="/login"
              exact
              component={Register}
            />
            <RoutePrivate
              isAuthenticated={auth.isLoggedIn}
              path="/borrowed"
              to="/login"
              exact
              component={withSidebar(Borrowed)}
            />
            <RoutePrivate
              isAuthenticated={auth.isLoggedIn}
              path="/events"
              to="/login"
              exact
              component={withSidebar(Events)}
            />
            <Route component={withSidebar(NotFound)} />
          </Switch>
        </AppWrapper>
        <Modal
          isOpen={isOpenEvent || isOpenExpense}
          title={
            isOpenEvent
              ? "Add new Event"
              : isOpenExpense
              ? "Add new Expense"
              : "Add new Borrow"
          }
          close={() =>
            this.setState({ isOpenEvent: false, isOpenExpense: false })
          }
        >
          {isOpenEvent && <AddEventContainer />}
          {isOpenExpense && (
            <AddExpenseContainer
              close={() =>
                this.setState({ isOpenEvent: false, isOpenExpense: false })
              }
              onSubmitForm={() => this.setState({ isOpen: false })}
              addExpense={addExpense}
            />
          )}
        </Modal>

        {auth.isLoggedIn && (
          <FloatingActionButton
            addExpense={() => this.setState({ isOpenExpense: true })}
            addEvent={() => this.setState({ isOpenEvent: true })}
          />
        )}
      </ThemeProvider>
    );
  }
}
