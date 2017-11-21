import React, { Component } from 'react';
import { link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <h1>Pawsome Buds</h1>
          <p>Home Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dolores repellendus
            aperiam amet, doloribus itaque sit molestias
             voluptatum autem sint eaque numquam omnis
             et. Odio sed labore enim dolorum ullam
             possimus.</p>
          <link to="about" className="button">Learn More </link>
      </div>
    );
  }
}

export default HomePage;
