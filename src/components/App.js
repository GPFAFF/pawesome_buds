import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/presentational/Header';

class App extends Component {
  render() {
    return (
      <div className="container" />
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
