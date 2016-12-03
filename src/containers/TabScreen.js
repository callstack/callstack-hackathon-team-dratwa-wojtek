import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import Router from '../router';


// Treat the TabScreen route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation
class TabScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return (
      <TabNavigation
        id="main"
        initialTab="home">
        <TabItem
          id="home"
          title="Home">
          <StackNavigation
            id="home"
            initialRoute={Router.getRoute('home')}
          />
        </TabItem>
        <TabItem
          id="tab"
          title="QRCode">
          <StackNavigation
            id="tab"
            initialRoute={Router.getRoute('tab')}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default TabScreen;