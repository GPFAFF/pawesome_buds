import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
          <p>about Lorem ipsum Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. Harum, consectetur, at obcaecati accusantium facilis aut voluptates unde accusamus eos.
             Error quo aut vitae et dolorum, ratione necessitatibus
             tempora omnis obcaecati?</p>
          {/* <Link to="/home" className="button">Home </Link> */}
      </div>
    );
  }
}

export default About;
