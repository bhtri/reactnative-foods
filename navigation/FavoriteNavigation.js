import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { FavoriteScreen } from './../screens';

const FavoriteStack = createStackNavigator();

export default function FavoriteStackScreen() {
    return (
        <FavoriteStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.second,
            }}
        >
            <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ title: 'Favorite Screen' }} />
        </FavoriteStack.Navigator>
    );
}