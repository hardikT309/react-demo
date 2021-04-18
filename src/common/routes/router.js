import React, { Component } from "react";
import Popup from "../../popup";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

export default function route() {
  return (
    <Router>
      <Switch>
        <Route exact path="/popup" name="popup" component={Popup} />
      </Switch>
    </Router>
  );
}
