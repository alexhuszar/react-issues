import request from 'lib/request'

/**
 * Fetch react sssues from the server
 * @returns {Promise}
 */
export const fetchIssues = () => {
  return request(
    `${process.env.REACT_APP_API_ENDPOINT}/repos/facebook/react/issues`
  )
};
