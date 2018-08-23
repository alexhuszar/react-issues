/**
 * Created by Alexandru Huszar on 8/22/2018.
 */
import { logError } from 'actions/log'

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response
 *
 * @return {object}
 */
function parseJSON(response) {
  return new Promise((resolve) => response.json()
    .then((json) => resolve({
      status: response.status,
      ok: response.ok,
      json,
    })));
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url
 * @param  {object} [options]
 *
 * @return {Promise}
 */
export default function request(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(parseJSON)
      .then((response) => {
        const { json } = response;
        if (response.ok) {
          return resolve(json);
        }
        return reject(json.meta.error);
      })
      .catch((error) => {
        logError(error);
        return reject({
          title: 'Error',
          message: error.message,
        })
      });
  });
}
