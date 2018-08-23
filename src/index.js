import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App'

import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';

import 'scripts/jsdoc'

/**
 * Render
 *
 * @param  {Component} Component
 * @return {Function}
 */
const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root'),
  )
};
render(App);

registerServiceWorker();
