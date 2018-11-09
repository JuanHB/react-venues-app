import { combineReducers } from 'redux';
import venuesReducer from './VenuesReducer';
import locationReducer from "./LocationReducer";

export default combineReducers({
  venues: venuesReducer,
  location: locationReducer
});
