import { combineReducers } from 'redux';
import tripsReducer from './tripsReducer';
import citiesReducer from './citiesReducer';

export default combineReducers({
    trips: tripsReducer,
    cities: citiesReducer
});