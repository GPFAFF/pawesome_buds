import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './components/App'
import HomePage from './components/container/HomePage'
import AboutPage from './components/container/AboutPage'


class Routes extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <BrowserRouter>
        <div>
          <Route exact path={`${baseUrl}`} component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
