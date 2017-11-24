import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Nav = (props) => {

  return (
    <div className="navigation">
      <ul>
        <li>
          <Link exact to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
