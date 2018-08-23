/**
 * Created by Alexandru Huszar on 8/22/2018.
 */
import React from 'react'

/**
 *
 * Bind all functions to component instance
 *
 * @param {Component} component React component
 *
 * @return {undefined}
 */
function addFunctionBindings(component) {
  let proto = component.constructor.prototype;

  let names = Object.getOwnPropertyNames(proto).filter((key) => {
    return key !== 'constructor' &&
      key !== 'render' &&
      typeof proto[key] === 'function';
  });

  names.forEach(function(key) {
    component[key] = component[key].bind(component);
  });
}

/**
 * Custom React Component
 */
export default class Component extends React.Component {

  /**
   * Component constructor
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    addFunctionBindings(this);
  }

}
