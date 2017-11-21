import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="container">
        <p>Header here...</p>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
