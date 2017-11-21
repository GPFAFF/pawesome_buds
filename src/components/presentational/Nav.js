import React, { Component } from 'react';
import {Route, Link, Switch } from 'react-router-dom';

import App from '../App';
import FormPage from '../container/FormPage';
import AboutPage from '../container/AboutPage';
import NotFound from '../container/NotFound';

const Nav = (props) => {
  return (
      <div>
        <ul>
          <li><Link to="/">App</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/form">Home</Link></li>
          <li><Link to="/notfound">Not Found</Link></li>
          <li><Link to="/zz">zz</Link></li>
        </ul>

        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/about" component={AboutPage} />
          <Route path="/form" component={FormPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
  );
};

export default Nav;
