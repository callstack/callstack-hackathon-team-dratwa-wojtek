import { createRouter } from '@exponent/ex-navigation';
import QRCodeContainer from './containers/QRCodeContainer';
import GettingStarted from './containers/GettingStartedScreen';

export const Router = createRouter(() => ({
  home: () => ({
    render: Router._makeRoute(GettingStarted),
  }),
  tab: () => ({
    render: Router._makeRoute(QRCodeContainer),
  }),
}));

export default Router;
