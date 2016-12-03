/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

/** Redux **/
import { Provider } from 'react-redux';
import store from './store';
import Router from './router';

// import TabScreen from './components/TabScreen';

export default class hackathonApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={Router.getRoute('home')} />
        </NavigationProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('hackathonApp', () => hackathonApp);
