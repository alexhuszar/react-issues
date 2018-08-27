/**
 * Created by Alexandru Huszar on 8/26/2018.
 */
import React, {Component, PropTypes} from 'lib/index'
import { Input } from 'semantic-ui-react'

import '../index.css'

/**
 * IssuesFilter
 */
export default class SearchInput extends Component {

  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    placeholder: 'Search...'
  };

  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    const { value, placeholder } = this.props;

    return (
      <Input
        placeholder={placeholder}
        value={value}
        onChange={this.handleSearchChange}
        icon='search'
      />
    )
  }

  /**
   * Handle input click
   */
  handleSearchChange(event, {value}) {
    this.props.onChange && this.props.onChange(value)
  }

}
