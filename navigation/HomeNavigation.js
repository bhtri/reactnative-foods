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
      <HomeStack.Screen name="HomeScreen" component={ProductScreen} options={{ title: 'Mon an' }} />
      <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} options={{ title: 'CategoryScreen' }} />
      <HomeStack.Screen name="ProductScreen" component={HomeScreen} options={{ title: 'ProductScreen' }} />
    </HomeStack.Navigator>
  );
}

