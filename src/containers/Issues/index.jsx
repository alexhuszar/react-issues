/**
 * Created by Alexandru Huszar on 8/22/2018.
 */
import React, { Component } from 'lib'
import { Loader, Header } from 'semantic-ui-react'

import ErrorBounding from 'components/ErrorBounding';
import GenericError from  'components/GenericError'

import IssuesTable from './IssuesTable'
import IssuesFilter from './IssuesFilter'

import './index.css'

import { fetchIssues }  from 'actions/issues'

import filterBySearch from 'lib/filter-by-search'

/**
 * Generate labels names
 * @param {Label[]} labels
 * @returns {string}
 */
const getLabelsName = (labels) => {
  let labelsStr = '';
  (labels || []).map((label) => {
    labelsStr += ` ${label.name}`
  });
  console.log(labelsStr)
  return labelsStr;
};

/**
 * Issues
 */
export default class Issues extends Component {

  static propTypes = {};

  static defaultProps = {};
  /**
   * Constructor
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      issues: [],
      searchText: '',
      error: null
    }
  }

  /**
   * Fetch issues from
   */
  componentDidMount() {
    this.setState({loading: true});
      fetchIssues()
      .then((response) => this.setState({
          // only save needed attributes
          issues: response.map((issue) => {
            const labelNames = getLabelsName(issue.labels);
            return {
              ...issue,
              searchValues: `${issue.title} ${labelNames} ${issue.state}`
            }
          })
        })
      )
      .catch((error) =>  this.setState({
        error: error
      }))
      .finally(() => this.setState({loading: false}));
  }

  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    const { issues = [], error, loading, searchText } = this.state;

    const filteredIssues = searchText
      ? filterBySearch(issues, 'searchValues', searchText)
      : issues;

    return (
      <div className="issues-wrap">
        <Loader active={loading} />
        <GenericError error={error} onDismiss={this.handleDismiss} />

        <Header as='h3' dividing>
          React issues
          <ErrorBounding >
            <IssuesFilter
              searchText={searchText}
              onSearchChange={this.handleSearch}
            />
          </ErrorBounding>
        </Header>

        <ErrorBounding>
          <IssuesTable issues={filteredIssues} />
        </ErrorBounding>
      </div>
    )
  }

  /**
   * Handle dismiss
   */
  handleDismiss() {
    this.setState({error: null})
  }

  /**
   * Handle search text change
   * @param {String} value
   */
  handleSearch(value){
    this.setState({
      searchText : value
    })
  }

}
