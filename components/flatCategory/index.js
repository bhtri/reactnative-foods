import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';
import Icon from '../icon';

export default function FlatCategory({ title, thumb, view, favorite, onPress }) {
    return (
        <TouchableOpacity style={styles.productWrap} onPress={onPress}>
            <View style={styles.product}>
                <View style={styles.productBoxImg}>
                    <Image style={styles.productImg} source={thumb} />
                </View>
                <Text style={styles.productText}>{title}</Text>
                <View style={styles.productIcon}>
                    <View style={styles.icon}>
                        <Icon name={'heart'} number={favorite} />
                    </View>
                    <View style={styles.icon}>
                        <Icon name={'eye'} number={view} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}