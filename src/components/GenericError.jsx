/**
 * Created by Alexandru Huszar on 8/23/2018.
 */
import React, {Component, PropTypes} from 'lib'
import { Button, Header, Modal } from 'semantic-ui-react'

// import styles from './GenericError.css'

/**
 * GenericError
 */
export default class GenericError extends Component {

  static propTypes = {
    error: PropTypes.shape({
      message: PropTypes.string, title: PropTypes.string
    }),
    onDismiss: PropTypes.func
  };

  static defaultProps = {
    error: undefined
  };


  render() {
    const { error } = this.props;

    if (error) {
      return (
        <Modal open={true} size='tiny'>
          <Header icon='warning circle' content='Error' negative/>
          <Modal.Content>
            <p>
              {error.message}
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' inverted onClick={this.handleClick}> Ok
            </Button>
          </Modal.Actions>
        </Modal>
      );
    }

    return null
  }

  /**
   * Handle click
   */
  handleClick() {
    const { onDismiss } = this.props;
    onDismiss && onDismiss()
  }
}
