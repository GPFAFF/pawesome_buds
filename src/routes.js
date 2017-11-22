import React, { Component } from 'react';
import { BrowserRouter, browserHistory } from 'react-router-dom';

import App from './components/App';
import Nav from './components/presentational/Nav';
import Header from './components/presentational/Header';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <div>
          <Header message="PawesomeBuds"/>
          <Nav />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
