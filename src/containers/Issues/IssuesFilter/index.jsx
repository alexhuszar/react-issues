/**
 * Created by Alexandru Huszar on 8/26/2018.
 */
import React, {Component, PropTypes} from 'lib'
import { Header, Input } from 'semantic-ui-react'

import AddIssue from '../AddIssue'

import './index.css'

/**
 * IssuesFilter
 */
export default class IssuesFilter extends Component {

  static propTypes = {
    onSearchChange: PropTypes.func,
    onAddIssue: PropTypes.func
  };

  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    const { searchText } = this.props;

    return (
      <div  className="issues-filter-wrap">
        <Header.Subheader >
          <Input
            placeholder='Search...'
            value={searchText}
            onChange={this.handleSearchChange}
            icon='search'
          />
          <AddIssue onCreate={this.handleAddIssue}/>
        </Header.Subheader>
      </div>
    )
  }

  /**
   * Handle input click
   */
  handleSearchChange(event, {value}) {
    this.props.onSearchChange(value)
  }

  /**
   * Handle input click
   */
  handleAddIssue(issue) {
    this.props.onAddIssue(issue)
  }

}
