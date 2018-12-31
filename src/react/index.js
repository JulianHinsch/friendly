/* global window document */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';

const Index = () => (
  <Router>
    <App />
  </Router>
);

window.onload = () => {
  render(<Index />, document.getElementById('main'));
}