/**
 * Created by Alexandru Huszar on 8/26/2018.
 */
/**
 * Filter by searchText
 * @param {Array[]} list
 * @param {String} key
 * @param {String} input
 * @return {*}
 */
export default (list, key, input) => {

  return list.filter( (item) => {
    // all char make it lowercase
    const filterBy = item[key].replace(/([A-Z])/g, '$1').toLowerCase();

    const inputText =
      // all chart make it lowercase
      input.replace(/([A-Z])/g, '$1').toLowerCase()
      // get all characters if not special character include space
        .replace(/[^a-zA-Z0-9-\s]/g, '')
        // remove duplicate spaces
        .replace(/\s\s+/g, ' ');

    const textList = inputText.split(' ');

    let count = 0;
    return textList.some((str) => {
      if (filterBy.includes(str)) {
        count ++;
      }
      return textList.length && textList.length === count
    })
  })
}
