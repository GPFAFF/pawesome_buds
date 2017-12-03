import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AddDog from "../presentational/AddDog";
class FormPage extends Component {

  constructor() {
    super();
    this.newDog = this.newDog.bind(this);

    this.state = {
      doggos: {}
    };
  }

  newDog(dog) {
    const doggos = this.state.dog;
    const timestamp = Date.now();
    doggos[`dog-${timestamp}`] = dog;
    this.setState({ doggos });
  }

  render() {
    return (
      <div className="signup-form block">
        <h2 className="signup-form--header">Signup Your Pooch Today!</h2>
        <AddDog newDog={this.props} message="Cooper and Rosie" />
      </div>
    );
  }
}

export default FormPage;
