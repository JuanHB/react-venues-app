import { combineReducers } from 'redux';
import venuesReducer from './VenuesReducer';

export default combineReducers({
  venues: venuesReducer
});
