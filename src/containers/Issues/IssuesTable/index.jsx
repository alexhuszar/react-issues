/**
 * Created by Alexandru Huszar on 8/24/2018.
 */
import React, {Component, PropTypes} from 'lib'
import { Table } from 'semantic-ui-react'


// import { someFunction } from 'lib/utils'

// import CssTransition from 'components/CssTransition'
// import ChildComponent1 from './childComponent1'
// import ChildComponent2 from './childComponent2'

import styles from './index.css'

// import { } from 'actions/'
// import { } from 'selectors/'


/**
 * IssuesTable
 */
export default class Index extends Component {

  static propTypes = {};

  // /**
  //  * Reset local state
  //  */
  // resetLocalState() {
  // }

  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    // const {  } = this.props;

    return (
      <Table className={styles.issueTable}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Registration Date</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

      </Table>
    )
  }

  // /**
  //  * Handle input click
  //  */
  // handleClick(event) {
  // }

}
