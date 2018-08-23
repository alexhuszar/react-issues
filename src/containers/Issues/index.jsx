/**
 * Created by Alexandru Huszar on 8/22/2018.
 */
import React, { Component } from 'lib'
import { Loader } from 'semantic-ui-react'

import GenericError from  'components/GenericError'

import IssuesTable from './IssuesTable'

import styles from './index.css'

import { fetchIssues}  from 'actions/issues'

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
      error: null
    }
  }

  /**
   * Fetch issues from
   */
  componentDidMount() {
    this.setState({loading: true});
      fetchIssues()
      .then((response) =>
        this.setState({
          issues: response
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

    const { issues, error, loading } = this.state;

    return (
      <div className={styles.issues}>
        <Loader active={loading}/>
        <GenericError error={error} onDismiss={this.handleDismiss}/>
        <IssuesTable issues={issues} />
      </div>
    )
  }

  /**
   * Handle dismiss
   */
  handleDismiss() {
    this.setState({error: null})
  }

}
