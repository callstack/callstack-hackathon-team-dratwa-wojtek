import React, { Component } from 'react';

import {createRouter} from '@exponent/ex-navigation';
import QRCodeContainer from './containers/QRCodeContainer';
import HomeScreen from './containers/HomeScreen';
import FirstTab from './containers/FirstTab';

export const Router = createRouter(() => ({
  tab: () => FirstTab,
  home: () => ({
    render: Router._makeRoute(QRCodeContainer),
  })
}))

export default Router;
