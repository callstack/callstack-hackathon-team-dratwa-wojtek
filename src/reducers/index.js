import { combineReducers } from 'redux';
import app from './app';
import garbage from './garbage';

export default combineReducers({
    app,
    garbage,
});
