import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {

  render() {
    return (
      <h1>
        <Link to={`/`}>{this.props.message}</Link>
      </h1>
    );
  }
}

Header.propTypes = {
  message: PropTypes.string.isRequired
};

export default Header;