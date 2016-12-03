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
import TabScreen from './containers/TabScreen';
import Router from './router';

export default class hackathonApp extends Component {
  render() {
    return (
      <Provider store={store}> 
        <NavigationProvider router={Router}>
          <TabScreen></TabScreen>
        </NavigationProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('hackathonApp', () => hackathonApp);
