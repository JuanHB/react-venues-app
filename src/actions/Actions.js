import axios from 'axios';
import * as types from './Types';
import createApiUrl from 'src/utils/createApiUrl';

const apiEndpoint = createApiUrl('/venues/explore');

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

export const receiveLocation = ll => ({
  type: types.RECEIVE_LOCATION,
  payload: { ll }
});

export const fetchVenues = ({limit = 10, ll = '40.7243,-74.0018', near = null}) => {
  return (dispatch) => {

    dispatch(requestVenues());

    const params = { limit, near, ll };

    return axios.get(apiEndpoint, { params })
      .then(res => {
        const list = res.data.response.groups[0].items;
        dispatch(receiveVenues(list))
      })
      .catch(error => {
        dispatch(geolocationFailed())
        throw(error);
      });
  }
};