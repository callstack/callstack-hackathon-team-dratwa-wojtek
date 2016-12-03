import {createRouter} from '@exponent/ex-navigation';
import {View,Text,StyleSheet} from 'react-native';

const HomeContainer = () => <Text>Home Route</Text>;

export const Router = createRouter(() => ({
  home: () => ({
    render: Router._makeRoute(HomeContainer),
  })
}))

export default Router;
