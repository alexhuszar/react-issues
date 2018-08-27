/**
 * Created by Alexandru Huszar on 8/24/2018.
 */
import React, {Component, PropTypes} from 'lib'

import { Table } from 'semantic-ui-react'

import { ASCENDING, DESCENDING } from 'constants/sort-by'

import './HeaderCell.css'

/**
 * HeaderCell
 */
export default class HeaderCell extends Component {

  static propTypes = {
    column: PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.string
    }),
    sortBy: PropTypes.shape({
      sortDirection: PropTypes.number,
      sortColumnName: PropTypes.string,
    }),
    onSort: PropTypes.func
  };
  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    const { column, sortBy } = this.props;
    const { label, name } = column;
    const { direction, columnName } = sortBy;

    return (
      <Table.HeaderCell
        onClick={this.handleClick}
        sorted={columnName === name ? direction : null}>{label}
      </Table.HeaderCell>
    )
  }

  /**
   * Handle click
   */
  handleClick() {
    const { column , sortBy, onSort } = this.props;
    onSort({
      columnName: column.name,
      direction: sortBy.direction === ASCENDING ? DESCENDING : ASCENDING
    })
  }

}
