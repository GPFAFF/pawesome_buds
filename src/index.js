import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
const styles = require('../src/styles/main.scss');


class Root extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

render(<Root />, document.querySelector("#app"));
