import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link activeClassName="is-active" to="/home">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/form">Form</Link>
        </li>

        <li>
          <Link to="/notfound">Not Found</Link>
        </li>

      </ul>
    </div>
  );
};

export default Nav;
