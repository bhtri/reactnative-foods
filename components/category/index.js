import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';

export default function Category({ title, thumb, onPress }) {
    return (
        <TouchableOpacity style={styles.productWrap} onPress={onPress}>
            <View style={styles.product}>
                <View style={styles.productBoxImg}>
                    <Image style={styles.productImg} source={thumb} />
                </View>
                <Text style={styles.productText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}