import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
const styles = require('../src/styles/main.scss');


class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

render(<Root />, document.querySelector("#app"));
