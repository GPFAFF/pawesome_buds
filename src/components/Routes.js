import React, { Component } from "react";
import { Route, Switch, IndexRoute } from "react-router-dom";

import HomePage from "./container/HomePage";
import FormPage from "./container/FormPage";
import AboutPage from "./container/AboutPage";
import NotFound from "./container/NotFound";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage} />
        <Route path="/form" component={FormPage} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
