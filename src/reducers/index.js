import { combineReducers } from 'redux';
import app from './app';
import sensors from './sensors';

export default combineReducers({
  app,
  sensors,
});
