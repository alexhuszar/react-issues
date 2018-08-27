/**
 * Created by Alexandru Huszar on 8/26/2018.
 */
import React, {Component, PropTypes} from 'lib'

import './LabelCell.css'
/**
 * LabelCell
 */
export default class LabelCell extends Component {

  static propTypes = {
    label: PropTypes.shape()
  };
  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {

    const { label } = this.props;
    const { color, name } = label;

    return (
      <div
        style={{background: `#${color}`}}
        className="label-cell"
      >
        {name}
      </div>
    )
  }
}
