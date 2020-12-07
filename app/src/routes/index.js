import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";

import SignUp from "../pages/SignUp";

import Confirm from "../pages/Confirm";

import Dashboard from "../pages/Dashboard";

import MyEvents from "../pages/MyEvents";

import PageMyEvent from "../pages/PageMyEvent";

import MyRegistrations from "../pages/MyRegistrations";

// import Error from "../pages/Error";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/sucess" component={Confirm} />

      <Route path="/cadastro" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/meuseventos" component={MyEvents} isPrivate />

      <Route path="/meuevento/:id" component={PageMyEvent} isPrivate />

      <Route path="/minhasincricoes" component={MyRegistrations} isPrivate />
      
      {/* <Route path="/" component={Error} /> */}
    </Switch>
  );
}
