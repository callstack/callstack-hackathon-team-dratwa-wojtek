/**
 *
 * Redux store (singleton) is returned from this file so that static
 * access outside of the React component tree is available.
 */
'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

/**
 * An array of Redux middlewares to apply to the chain
 */
const middlewares = [thunk];

export function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}

export default configureStore({});
