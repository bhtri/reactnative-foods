import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, CategoryScreen, ProductScreen } from './../screens';
import { COLORS } from '../contains';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.second,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Mon an ngon' }} />
      <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} options={{ title: 'CategoryScreen' }} />
      <HomeStack.Screen name="ProductScreen" component={ProductScreen} options={{ title: 'ProductScreen' }} />
    </HomeStack.Navigator>
  );
}

