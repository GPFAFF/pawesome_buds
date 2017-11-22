import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Routes from '../components/Routes';
import Nav from '../components/presentational/Nav';
import Header from '../components/presentational/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header message="PawesomeBuds" />
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
