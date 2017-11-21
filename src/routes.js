import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './components/App';
import Header from './components/presentational/Header';
import HomePage from './components/container/HomePage';
import AboutPage from './components/container/AboutPage';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header message="PawesomeBuds"/>
          <ul>
            <li><Link to="/">App</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>

          <Route exact path="/" component={App} />
          <Route path="/about" component={AboutPage} />
          <Route path="/home" component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
