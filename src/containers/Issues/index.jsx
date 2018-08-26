/**
 * Created by Alexandru Huszar on 8/22/2018.
 */
import React, { Component } from 'lib'
import { Loader } from 'semantic-ui-react'

import GenericError from  'components/GenericError'

import IssuesTable from './IssuesTable'
import IssuesFilter from './IssuesFilter'

import './index.css'

import { fetchIssues }  from 'actions/issues'

import filterBySearch from 'lib/filter-by-search'

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
            return {
              ...issue,
              searchValues: `${issue.title} ${issue.state}`
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

    debugger;

    const filteredIssues = searchText
      ? filterBySearch(issues, 'searchValues', searchText)
      : issues;

    return (
      <div className="issues-wrap">
        <Loader active={loading}/>
        <GenericError error={error} onDismiss={this.handleDismiss}/>
        <IssuesFilter
          searchText={searchText}
          onSearchChange={this.handleSearch}
        />
        <IssuesTable issues={filteredIssues} />
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
