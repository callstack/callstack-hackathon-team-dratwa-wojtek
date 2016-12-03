import React, { Component } from 'react';

import {createRouter} from '@exponent/ex-navigation';
import QRCodeContainer from './containers/QRCodeContainer';
import HomeScreen from './containers/HomeScreen';

export const Router = createRouter(() => ({
  home: () => ({
    render: Router._makeRoute(HomeScreen),
  }),
  tab: () => ({
    render: Router._makeRoute(QRCodeContainer),
  }),
}))

export default Router;
