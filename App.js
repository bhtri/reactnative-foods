import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from './contains';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SeenScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Seen!</Text>
    </View>
  );
}

function FavoriteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorite!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
                break;
              case 'Seen':
                iconName = focused
                  ? 'ios-timer'
                  : 'ios-timer-outline';
                break;
              case 'Favorite':
                iconName = focused
                  ? 'ios-heart'
                  : 'ios-heart-outline';
                break;
              default:
                break;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.second,
          tabBarInactiveTintColor: COLORS.second,
          tabBarStyle: {
            backgroundColor: COLORS.primary,
            height: 65,
            paddingBottom: 10,
          },
          tabBarLabelStyle: {
            fontSize: 13,
          }
        })}
      >

        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chu' }} />
        <Tab.Screen name="Seen" component={SeenScreen} options={{ title: 'Da xem' }} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ title: 'Yeu thich' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}