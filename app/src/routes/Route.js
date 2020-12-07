import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";

import { store } from "../store";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  // Se não estiver logao redireciona para a tela de login

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // Se estiver logado redireciona para perfil

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // Condição para renderizar layout

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
