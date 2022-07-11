import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import styles from './style';
import { COLORS } from '../../contains';

export default function Icon({ name, number }) {
    return (
        <View style={styles.container}>
            <FontAwesome name={name} size={30} color={COLORS.icon} />
            {
                number
                    ? <Text style={styles.iconText}>{number}</Text>
                    : <Text></Text>
            }
        </View>
    )
}