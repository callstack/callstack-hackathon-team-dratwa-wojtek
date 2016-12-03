import React, { Component } from 'react';

import {createRouter} from '@exponent/ex-navigation';
import HomeScreen from './containers/HomeScreen';



export const Router = createRouter(() => ({
  home: () => ({
    render: Router._makeRoute(HomeScreen),
  })
}))

export default Router;
