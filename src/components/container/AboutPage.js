import React, { Component } from 'react';
import { link } from 'react-router';



class About extends Component {
  render() {
    return (
      <div className="home">
        <h1>About</h1>
          <p>about Lorem ipsum Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. Harum, consectetur, at obcaecati accusantium facilis aut voluptates unde accusamus eos.
             Error quo aut vitae et dolorum, ratione necessitatibus
             tempora omnis obcaecati?</p>
          <link to="home" className="button">Home </link>
      </div>
    );
  }
}

export default About;
