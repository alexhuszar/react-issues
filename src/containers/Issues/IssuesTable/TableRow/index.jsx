/**
 * Created by Alexandru Huszar on 8/24/2018.
 */
import React, {Component, PropTypes} from 'lib'
import { Table } from 'semantic-ui-react';

import LabelCell from './LabelCell';

import './index.css'

import { NUMBER, DATE, LABEL } from 'constants/value-types'

/**
 * Format cell values
 * @param {Issue} issue
 * @param {String} type
 * @param {String} key // column name
 * @returns {*}
 */
const formatValue = (issue, type, key) => {
  switch (type) {
    case NUMBER:
      return (
        <Table.Cell key={`cell_${key}`} textAlign="right" singleLine>
          {issue[key]}
        </Table.Cell>
      );
    case DATE:
      return(
        <Table.Cell key={`cell_${key}`} singleLine>
          { new Date( Date.parse(issue[key])).toISOString().substr(0, 10)}
        </Table.Cell>
      );
    case LABEL:
      return (
        <Table.Cell key={`cell_${key}`}>
          {
            (issue[key] || []).map((label) =>
              <LabelCell label={label} key={label.id}/>
            )
          }
        </Table.Cell>
      );

    default:
      return (
        <Table.Cell key={`cell_${key}`} >
          {issue[key]}
        </Table.Cell>
      )
  }
};

/**
 * Index
 */
export default class Index extends Component {

  static propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.string
      })
    ),
    issue: PropTypes.object
  };

  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    const {columns, issue} = this.props;
    return (
      <Table.Row>
        {
          (columns || []).map((column) =>
            formatValue(issue, column.type, column.name)
          )
        }
      </Table.Row>
    )
  }

}
