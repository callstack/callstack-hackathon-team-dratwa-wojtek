import React, { Component } from 'react';

import {createRouter} from '@exponent/ex-navigation';
import QRCodeContainer from './containers/QRCodeContainer';
<<<<<<< 7010afebf1c29990d1e091beb3f52abc80f9ba0e
import GettingStarted from './containers/GettingStartedScreen';
=======
import HomeScreen from './containers/HomeScreen';
import FirstTab from './containers/FirstTab';
>>>>>>> added tabs configuration to router

export const Router = createRouter(() => ({
  tab: () => FirstTab,
  home: () => ({
    render: Router._makeRoute(GettingStarted)
  }),
  gettingStarted: () => ({
    render: Router._makeRoute(GettingStarted)
  })
}))

export default Router;
