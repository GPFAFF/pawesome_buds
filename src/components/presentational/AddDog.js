import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddDog extends Component {

  createDog(event) {
    event.preventDefault();
    console.log('Here comes a 🐶');

    const dog = {
      name: this.name.value,
      breed: this.breed.value,
      weight: this.weight.value,
      gender: this.gender.value,
    };
    this.addDog.reset();
    console.log(dog, '🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶');
  }

  render() {
    const { message } = this.props;

    return (
      <form ref={(input) => this.addDog = input} className="dog-form" onSubmit={(event) => this.createDog(event)}>
        <h3> {message} </h3>
        <label htmlFor="dog-name"/>
        <input ref={(input) => this.name = input} className="dog-name" id="dog-name" type="text" placeholder="Add your dogs name" />
        <label htmlFor="dog-breed" />
        <input ref={(input) => this.breed = input} className="dog-breed" id="dog-breed" type="text" placeholder="What is your dogs breed?" />
        <label htmlFor="dog-weight" />
        <input ref={(input) => this.weight = input} className="dog-weight" id="dog-weight" type="text" placeholder="Add your dogs weight" />
        <label htmlFor="dog-gender" />
        <input ref={(input) => this.gender = input} className="dog-gender" id="dog-gender" type="text" placeholder="Add your dogs gender" />
        <label htmlFor="dog-picture" />
        <input ref={(input) => this.picture = input}
        className="dog-picture" id="dog-picture" type="text" placeholder="Add your dogs picture" />
        <button className="button" type="submit"> +Add Your Dog</button>
      </form>
    );
  }
}

AddDog.propTypes = {
  message: PropTypes.string.isRequired
};

export default AddDog;