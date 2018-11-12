import axios from 'axios';
import * as types from './Types';
import { createApiUrl } from 'src/utils/createApiUrl';

/**
 * Creating the API Endpoint to make the venues list request
 */
const apiEndpoint = createApiUrl('/venues/explore');

/**
 * ****************************
 * Data State Actions block
 * ****************************
 */
export const requestVenues = () => ({
  type: types.REQUEST_VENUES,
});

export const receiveVenues = list => ({
  type: types.RECEIVE_VENUES,
  payload: { list }
});

export const clearVenues = () => ({
  type: types.CLEAR_VENUES,
});

export const geolocationFailed = () => ({
  type: types.GEOLOCATION_FAILED
});

/**
 * Async XHR Calls Block
 */
/**
 * Creates the function to make the GET call to the Foursquare API
 * @param limit {number} the number of results to return
 * @param ll {(string|Object)} Latitude, Longitude
 * @param near {(string|Object)} Location name to search venues (ex.: New York, Chicago, etc...)
 * @returns {function(*): Promise<T>}
 */
export const fetchVenues = ({ limit = 10, ll = null, near = null }) => {
  return (dispatch) => {

    // creating the params object literal
    const params = { limit, near, ll };

    // updates the "fetching" state
    dispatch(requestVenues());

    // do the GET call
    return axios.get(apiEndpoint, { params })
      .then(res => {

        if (res && res.data) {
          // accessing directly the returned data without checking first
          // is wrong, I know, usually I would triple check before
          // using it, and also I would implement an interface here...
          const list = res.data.response.groups[0].items;
          // updates the state with the new list of venues
          dispatch(receiveVenues(list))
        }
      })
      .catch(error => {
        // in case of error, updates the state
        // to show a feedback to the user...
        dispatch(geolocationFailed());
        throw(error);
      });
  }
};