/**
 * Created by Alexandru Huszar on 8/26/2018.
 */
import React, {Component, PropTypes} from 'lib'
import { Button, Form, Dropdown, Input } from 'semantic-ui-react'

import Modal from 'components/Modal'

import './index.css'

const options = [
  {
    label: { style:{ backgroundColor: "#fef2c0"}, empty: true, circular: true },
    color: 'fef2c0',
    value: 710375792,
    text: "Type: Discussion"
  }, {
    label: { style:{ backgroundColor: "#5319e7"}, empty: true, circular: true },
    color: '5319e7',
    value: 710615342,
    text: "Type: Umbrella"
  }, {
    label: { style:{ backgroundColor: "#e7e7e7"}, empty: true, circular: true },
    color: 'e7e7e7',
    value: 196858374,
    text: "CLA Signed"
  }, {
    label: { style:{ backgroundColor: "#cc317c"}, empty: true, circular: true },
    color: 'fef2c0',
    value: 40929155,
    text: "Type: Question"
  }, {
    label: { style:{ backgroundColor: "#fef2c0"}, empty: true, circular: true },
    color: 'fef2c0',
    value: 127893911,
    text: "Component: DOM"
  }, {
    label: { style:{ backgroundColor: "#f9a798"}, empty: true, circular: true },
    color: "f9a798",
    id: 739761016,
    text: "Component: Reconciler"
  }, {
    label: { style:{ backgroundColor: "#c7def8"}, empty: true, circular: true },
    color: "c7def8",
    value: 121709921,
    text: "Type: Feature Request",
  }, {
    label: { style:{ backgroundColor: "#fbca04"}, empty: true, circular: true },
    color: "fbca04",
    value: 710722093,
    text: "Type: Needs Investigation",
  }
];



/**
 * CreateIssue
 */
export default class CreateIssue extends Component {

  static propTypes = {
    onCreate: PropTypes.func
  };

  /**
   * Constructor
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      labelIds: []
    }
  }

  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    const { showModal, title, labelIds } = this.state;

    return (
      <div className="create-issue">
        <Button basic color='grey' onClick={this.handleNewClick}>
          New issue
        </Button>
        <Modal
          title="Create issue"
          closeOnDimmerClick={false}
          disableConfirm={!title || !labelIds.length}
          isOpen={showModal}
          cancelLabel="Cancel"
          confirmLabel="Create"
          onClose={this.handleClose}
          onConfirm={this.handleConfirm}
        >
          <Form>
            <Form.Field>
              <label>Title</label>
              <Input
                fluid
                placeholder='Title'
                onChange={this.handleTitleChange}
                value={title}
              />
            </Form.Field>

            <Form.Field>
              <label>Labels</label>
              <Dropdown
                placeholder='Skills'
                fluid multiple selection
                options={options}
                value={labelIds}
                onChange={this.handleAddItem}
              />
            </Form.Field>
          </Form>
        </Modal>
      </div>
    )
  }

  /**
   * Handle input click
   */
  handleNewClick() {
   this.setState({
     showModal: true
   })
  }

  /**
   * Handle on close
   */
  handleClose() {
    this.setState({
      showModal: false
    })
  }

  /**
   * Handle title change
   * @param {Event} event
   * @param {String} value
   */
  handleTitleChange(event, {value}) {
    console.log(value);
    this.setState({
      title: value
    })
  }

  /**
   * Handle add item
   * @param {Event} event
   * @param {[String | Number]} value
   */
  handleAddItem(event, {value}) {
    this.setState({
      labelIds: value
    })
  }

  /**
   *
   */
  handleConfirm() {
      const { labelIds, title } = this.state;

      const listOptions =
        options.filter((option) => labelIds.find((id) => option.value === id));

      const isoDate = new Date().toISOString();
      const dateNow =  Date.now();

      this.props.onCreate && this.props.onCreate({
        created_at:  isoDate,
        updated_at:  isoDate,
        title,
        labels: (listOptions || []).map((option) =>
          ({color: option.color, id: option.value, name: option.text})
        ),
        number: dateNow,
        id: dateNow,
        state: 'open'
      })
  }




}
