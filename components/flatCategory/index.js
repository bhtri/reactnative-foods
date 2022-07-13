import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';
import Icon from '../icon';

export default function FlatCategory() {
    return (
        <TouchableOpacity style={styles.productWrap}>
            <View style={styles.product}>
                <View style={styles.productBoxImg}>
                    <Image style={styles.productImg} source={require('../../assets/images/wrapper.png')} />
                </View>
                <Text style={styles.productText}>abc xyz</Text>
                <View style={styles.productIcon}>
                    <View style={styles.icon}>
                        <Icon name={'heart'} number={123} />
                    </View>
                    <View style={styles.icon}>
                        <Icon name={'eye'} number={123} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}