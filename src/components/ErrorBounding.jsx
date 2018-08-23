/**
 * Created by Alexandru Huszar on 8/24/2018.
 */
import React, {Component} from 'lib'

import { Message, Icon } from 'semantic-ui-react'

import styles from './ErrorBounding.css'

/**
 * ErrorBounding
 */
export default class ErrorBounding extends Component {

  constructor(props) {
    super(props);
    // Add some default error states
    this.state = {
      error: false,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    // Something happened to one of my children.
    // Add error to state
    this.setState({
      error: error,
      info: info,
    });
  }

  render() {
    if(this.state.error) {
      return (
        <Message className={styles.errorMessage}>
          <Message.Header ><Icon fitted name='warning circle' />
            We're sorry something went wrong.
          </Message.Header>
          <p>Try to refresh the page!</p>
        </Message>
      );
    }
    // No errors were thrown. As you were.
    return this.props.children;
  }
}
