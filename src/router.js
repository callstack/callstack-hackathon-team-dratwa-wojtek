import React, { Component } from 'react';

import {createRouter} from '@exponent/ex-navigation';
import QRCodeContainer from './containers/QRCodeContainer';
import HomeScreen from './containers/HomeScreen';

export const Router = createRouter(() => ({
  home: () => HomeScreen,
  tab: () => QRCodeContainer,
}))

export default Router;
