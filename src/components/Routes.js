import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Match, Miss } from "react-router";

import HomePage from "./container/HomePage";
import FormPage from "./container/FormPage";
import AboutPage from "./container/AboutPage";
import NotFound from "./container/NotFound";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/form" component={FormPage} />
        <Route component={NotFound} />
      </Switch>
        // <Match pattern="/" exactly component={HomePage} />
        // <Match pattern="/about" exactly component={AboutPage} />
        // <Match path="/form" component={FormPage} />
        // <Miss component={NotFound} />
    );
  }
}

export default Routes;
