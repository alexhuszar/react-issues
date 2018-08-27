/**
 * Created by Alexandru Huszar on 8/24/2018.
 */
import { ASCENDING } from 'constants/sort-by'
/**
 * Sort array by field, direction option
 *
 * @param {Array} array
 * @param {String} field
 * @param {Number} direction
 *
 * @return {Array}
 */
export default (array, field, direction = ASCENDING) => {

  /**
   * Compare the array item with field and direction option
   *
   * @param {String} field
   * @param {Number} direction 1, -1
   * @return {Array}
   */
  const sortArray = (field, direction) => {

    /**
     * Return key value
     *
     * @param {*} x
     *
     * @return {*}
     */
    let key = (x) => {
      return x[field]
    };
    /* eslint-disable no-sequences */
    return (a, b) => {
      return a = key(a), b = key(b), direction * ((a > b) - (b > a));
    }
  };

  return array.sort(sortArray(field, direction))
}
