import { createStackNavigator } from '@react-navigation/stack';

import { SeenScreen } from './../screens';

const SeenStack = createStackNavigator();

export default function SeenStackScreen() {
    return (
        <SeenStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.second,
            }}
        >
            <SeenStack.Screen name="SeenScreen" component={SeenScreen} options={{ title: 'Seen Screen' }} />
        </SeenStack.Navigator>
    );
}