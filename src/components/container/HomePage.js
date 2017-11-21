import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      // <div className="home">
      //   <h1> Pawesome Buds </h1>
      //   <p>Home Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repellendus aperiam amet, doloribus itaque sit molestias       voluptatum autem sint eaque numquam omnis et. Odio sed labore enim dolorum ullam possimus.</p>
      // </div>
      <div className="home">
          <p>Home Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dolores repellendus
            aperiam amet, doloribus itaque sit molestias
             voluptatum autem sint eaque numquam omnis
             et. Odio sed labore enim dolorum ullam
             possimus.</p>
          <Link to="/about" className="button">Learn More </Link>
      </div>
    );
  }
}

export default HomePage;
