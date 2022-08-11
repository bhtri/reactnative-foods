import { createStackNavigator } from '@react-navigation/stack';

import { FavoriteScreen } from './../screens';
import { IconHeader } from '../components';
import { useSelector } from 'react-redux';

const FavoriteStack = createStackNavigator();

export default function FavoriteStackScreen() {
    const favorites     = useSelector((state) => state.favorite.items);

    return (
        <FavoriteStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.second,
            }}
        >
            <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{
                title: 'Favorite Screen',
                headerRight: () => <IconHeader data={favorites}></IconHeader>
             }} />
        </FavoriteStack.Navigator>
    );
}