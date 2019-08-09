import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import nameReducer from './nameReducer';

export default combineReducers({
  errors: errorReducer,
  names: nameReducer,
})