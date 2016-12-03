import React, { Component } from 'react';

import {createRouter} from '@exponent/ex-navigation';
import QRCodeContainer from './containers/QRCodeContainer';
import GettingStarted from './containers/GettingStartedScreen';

export const Router = createRouter(() => ({
  home: () => ({
    render: Router._makeRoute(GettingStarted)
  }),
  gettingStarted: () => ({
    render: Router._makeRoute(GettingStarted)
  })
}))

export default Router;
