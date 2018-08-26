import request from 'lib/request'

// TODO add REACT-REDUX(Provider) in the app ( Task was to no other libraries should be used outside the listed	libraries in the pdf )
/**
 * Fetch react sssues from the server
 * @returns {Promise}
 */
export const fetchIssues = () => {
  return request(
    `${process.env.REACT_APP_API_ENDPOINT}/repos/facebook/react/issues`
  )
};
