/**
 * Created by Alexandru Huszar on 8/27/2018.
 */
import React, {Component, PropTypes} from 'lib'
import { Button, Modal as SemanticModal, Header } from 'semantic-ui-react'

import './Modal.css';

/**
 * Modal
 */
export default class Modal extends Component {

  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node,
    cancelLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    confirmLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    disableConfirm: PropTypes.bool,
    closeOnDimmerClick: PropTypes.bool,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func
  };

  static  defaultProps = {
    confirmLabel: 'Ok',
    closeOnDimmerClick: true
  };

  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    const {
      isOpen, children, cancelLabel, confirmLabel, title,
      disableConfirm = false, closeOnDimmerClick
    } = this.props;

    return (
      <SemanticModal
        size='small'
        closeOnDimmerClick={closeOnDimmerClick}
        open={isOpen}
        className="modal-content"
        onClose={this.handleClose}

      >
        <Header content={title} />
        <SemanticModal.Content >
          {children}
        </SemanticModal.Content>
        <SemanticModal.Actions>
          {
            cancelLabel && (
              <Button basic color='grey' onClick={this.handleClose}>
                {cancelLabel}
              </Button>
              )
          }
          {
            confirmLabel && (
              <Button
                color='green'
                inverted
                onClick={this.handleConfirm}
                disabled={disableConfirm}
              >
                {confirmLabel}
              </Button>
            )
          }
        </SemanticModal.Actions>
      </SemanticModal>
    )
  }

  /**
   * Handle close click
   */
  handleClose() {
   this.props.onClose && this.props.onClose();
  }

  /**
   * Handle confrim click
   */
  handleConfirm() {
    this.props.onConfirm && this.props.onConfirm();
    this.handleClose();
  }

}
