import React, { Component } from 'react';

import {createRouter} from '@exponent/ex-navigation';
import QRCodeContainer from './containers/QRCodeContainer';

export const Router = createRouter(() => ({
  home: () => ({
    render: Router._makeRoute(QRCodeContainer),
  })
}))

export default Router;
