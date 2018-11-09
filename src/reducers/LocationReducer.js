import * as types from 'src/actions/Types'

const initialState = () => ({
  ll: null
});

const locationReducer = (
  state = initialState(),
  action = null
) => {

  const { type, payload } = action;

  switch (type) {
    case types.RECEIVE_LOCATION:
      return {
        ...state,
        ll: payload.ll
      };

    default:
      return {
        ...state
      };
  }
};

export default locationReducer;