/**
 * Created by Alexandru Huszar on 8/26/2018.
 */
import React, {Component, PropTypes} from 'lib';
import { Icon } from 'semantic-ui-react';

import './Label.css'
/**
 * Label
 */
export default class Label extends Component {

  static propTypes = {
    label: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      color: PropTypes.string,
      name: PropTypes.string.isRequired
    }),
    iconName: PropTypes.string,
    onRemove: PropTypes.func
  };
  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    const { label, iconName } = this.props;
    const { color, name } = label;

    return (
      <div
        style={{background: `#${color}`}}
        className="cell-label"
      >
        {name}
        <Icon onClick={this.handleRemove} name={iconName} />
      </div>
    )
  }

  handleRemove() {
    const { label } = this.props;
    const { id } = label;
    this.props.onRemove && this.props.onRemove(id)
  }
}
