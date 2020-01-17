import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const RoutePrivate = ({
  component: Component,
  isAuthenticated,
  to,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      console.log(props);
      return isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={`${to}?redirect=${rest.location.pathname}`} />
      );
    }}
  />
);

RoutePrivate.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string
};

RoutePrivate.defaultProps = {
  to: "/",
  location: null
};

export default RoutePrivate;
