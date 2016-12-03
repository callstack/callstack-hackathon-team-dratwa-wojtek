import React from 'react';

import { createRouter } from '@exponent/ex-navigation';
import QRCodeContainer from './containers/QRCodeContainer';
import GettingStarted from './containers/GettingStartedScreen';
import OfficeRules from './containers/OfficeRules';

export const Router = createRouter(() => ({
  home: () => ({
    render: Router._makeRoute(GettingStarted),
  }),
  tab: () => ({
    render: Router._makeRoute(QRCodeContainer),
  }),
  officerules: () => ({
    render: Router._makeRoute(OfficeRules),
  }),
}))

export default Router;
