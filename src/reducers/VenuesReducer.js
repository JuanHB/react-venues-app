import * as types from 'src/actions/Types'

const initialState = () => ({
  list: [],
  fetching: true,
  geoFailed: false,
});

const venuesReducer = (
  state = initialState(),
  action = null
) => {

  const { type, payload } = action;

  switch (type) {
    case types.REQUEST_VENUES:
      return {
        ...state,
        fetching: true,
        geoFailed: false,
      };

    case types.RECEIVE_VENUES:
      return {
        ...state,
        list: payload.list,
        fetching: false,
        geoFailed: false,
      };

    case types.CLEAR_VENUES:
      return {
        ...state,
        list: [],
        fetching: false,
        geoFailed: false,
      };

    case types.GEOLOCATION_FAILED:
      return {
        ...state,
        fetching: false,
        geoFailed: true
      };

    default:
      return {
        ...state
      };
  }
};

export default venuesReducer;