import { createRouter } from '@exponent/ex-navigation';
import QRCodeContainer from './containers/QRCodeContainer';
// import GettingStarted from './containers/GettingStartedScreen';
import ParkingStatusContainer from './containers/ParkingStatusContainer';


export const Router = createRouter(() => ({
  home: () => ({
    render: Router._makeRoute(ParkingStatusContainer),
  }),
  tab: () => ({
    render: Router._makeRoute(QRCodeContainer),
  }),
}));

export default Router;
