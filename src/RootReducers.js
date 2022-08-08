import PropertyReducer from './redux/reducer';
import { combineReducers } from 'redux';

const RootReducers = combineReducers({
  PropertyReducer: PropertyReducer,
});

export default RootReducers;
