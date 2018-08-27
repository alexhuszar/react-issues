/**
 * Created by Alexandru Huszar on 8/24/2018.
 */
import React, {Component, PropTypes} from 'lib'
import { Table } from 'semantic-ui-react'

import HeaderCell from './HeaderCell';
import TableRow from './TableRow';

import './index.css'

import columns from 'scripts/list/issue-table-columns'
import { ASCENDING } from 'constants/sort-by'

import sortArray from 'lib/sort-array';

/**
 * IssuesTable
 */
export default class IssuesTable extends Component {

  /**
   *
   * @type {{issues: Issue[]}}
   */
  static propTypes = {
    issues: PropTypes.arrayOf(PropTypes.object)
  };

  state = {
    sortBy: {
      columnName: null,
      direction: null,
    }
  };

  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    const { issues } = this.props;
    const { sortBy } = this.state;
    const sortedIssues = sortArray(
      issues, sortBy.columnName, sortBy.direction === ASCENDING ? 1 : -1
    );

    return (
      <div className="issues-table">
        <Table sortable >
          <Table.Header>
            <Table.Row>
              {
                (columns || []).map((column) => (
                  <HeaderCell
                    key={`header_${column.name}`}
                    column={column}
                    sortBy={sortBy}
                    onSort={this.handleSort}
                  />
                ))
              }
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              (sortedIssues || []).map((issue) => (
                <TableRow
                  key={`issue_${issue.id}`}
                  issue={issue}
                  columns={columns}
                />
              ))
            }
            {
              sortedIssues.length === 0 && (
                <Table.Row>
                  <Table.Cell colSpan={columns.length} textAlign="center">
                    No data available
                  </Table.Cell>
                </Table.Row>
              )
            }
          </Table.Body>
        </Table>
      </div>
    )
  }

  /**
   * Handle sort
   * @param {String} columnName
   * @param {Number} direction
   */
  handleSort({columnName, direction}) {
    this.setState({
      sortBy: {
        columnName,
        direction
      }
    })
  }

}
