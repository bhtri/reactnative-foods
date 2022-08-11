import { createStackNavigator } from '@react-navigation/stack';

import { SeenScreen } from './../screens';
import { IconHeader } from '../components';
import { useSelector } from 'react-redux';

const SeenStack = createStackNavigator();

export default function SeenStackScreen() {
    const viewed = useSelector((state) => state.viewed.items);

    return (
        <SeenStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.second,
            }}
        >
            <SeenStack.Screen name="SeenScreen" component={SeenScreen} options={{
                title: 'Seen Screen',
                headerRight: () => <IconHeader seen data={viewed}></IconHeader>
            }} />
        </SeenStack.Navigator>
    );
}