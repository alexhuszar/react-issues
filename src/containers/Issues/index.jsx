/**
 * Created by Alexandru Huszar on 8/22/2018.
 */
import React, { Component } from 'lib'
import { Loader, Header } from 'semantic-ui-react'

import ErrorBounding from 'components/ErrorBounding';
import GenericError from  'components/GenericError'
import SearchInput from  'components/SearchInput'

import IssuesTable from './IssuesTable'
import CreateIssue from './CreateIssue';

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
  (labels || []).forEach((label) => {
    labelsStr += ` ${label.name}`
  });
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
          // only save needed attributes in state
          issues: response.map((issue) => {
            const labelNames = getLabelsName(issue.labels);
            return {
              title: issue.title,
              state: issue.state,
              labels: issue.labels.map(({name, id, color}) =>
                ({id, name, color})
              ),
              created_at: issue.created_at,
              updated_at: issue.updated_at,
              number: issue.number,
              id: issue.id,
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
      <div>
        <Loader active={loading} />
        <GenericError error={error} onDismiss={this.handleDismiss} />

        <Header as='h3' dividing>
          React issues
        </Header>

        <ErrorBounding >
          <div  className="issues-filter-wrap">
            <SearchInput
              value={searchText}
              onChange={this.handleSearch}
            />
            <CreateIssue onCreate={this.handleAddIssue}/>
          </div>
        </ErrorBounding>

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

  /**
   * Handle create Issue
   * @param {Issue} issue
   */
  handleAddIssue(issue){
    const { issues = []} = this.state;
    this.setState({
      issues: [...issues, issue]
    })
  }

}
