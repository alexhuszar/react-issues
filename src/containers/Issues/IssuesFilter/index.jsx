/**
 * Created by Alexandru Huszar on 8/26/2018.
 */
import React, {Component, PropTypes} from 'lib'
import { Divider, Input } from 'semantic-ui-react'

import styles from './index.css'

/**
 * IssuesFilter
 */
export default class IssuesFilter extends Component {

  static propTypes = {
    onSearchChange: PropTypes.func
  };

  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    const { searchText } = this.props;

    return (
      <div className={styles.issuesFilter}>
        <Input
          placeholder='Search...'
          value={searchText}
          onChange={this.handleSearchChange}
          icon='search'
        />
        <Divider />
      </div>
    )
  }

  /**
   * Handle input click
   */
  handleSearchChange(event, {value}) {
    this.props.onSearchChange(value)
  }

}
