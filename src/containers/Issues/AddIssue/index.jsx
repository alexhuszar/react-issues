/**
 * Created by Alexandru Huszar on 8/26/2018.
 */
import React, {Component, PropTypes} from 'lib'

import { Button } from 'semantic-ui-react'

import './index.css'

// import { } from 'actions/'
// import { } from 'selectors/'

/**
 * AddIssue
 */
export default class AddIssue extends Component {

  static propTypes = {};

  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    // const {  } = this.props;

    return (
      <div className="add-issue-btn-wrap">
        <Button>
          Add issue
        </Button>
      </div>
    )
  }

  // /**
  //  * Handle input click
  //  */
  // handleClick(event) {
  // }

}
