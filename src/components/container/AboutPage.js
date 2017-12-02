import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//about page

class About extends Component {
  render() {
    return (
      <div className="about block">
        <h2>About</h2>
          <p>about Lorem ipsum Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. Harum, consectetur, at obcaecati accusantium facilis aut voluptates unde accusamus eos.
             Error quo aut vitae et dolorum, ratione necessitatibus
             tempora omnis obcaecati?</p>
          <Link to="/" className="button">Home </Link>
      </div>
    );
  }
}

export default About;
