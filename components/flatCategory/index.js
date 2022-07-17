import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

import styles from './style';
import Icon from '../icon';
import { toggleFavorite } from '../../store/slices/favorite';

export default function FlatCategory({ title, thumb, view, favorite, onPress }) {
    const dispatch = useDispatch();

    const changeFavorite = () => {
        dispatch(toggleFavorite({ id: 1 }));
    }

    return (
        <TouchableOpacity style={styles.productWrap} onPress={onPress}>
            <View style={styles.product}>
                <View style={styles.productBoxImg}>
                    <Image style={styles.productImg} source={thumb} />
                </View>
                <Text style={styles.productText}>{title}</Text>
                <View style={styles.productIcon}>
                    <TouchableOpacity onPress={changeFavorite} style={styles.icon}>
                        <Icon name={'heart'} number={favorite} />
                    </TouchableOpacity>
                    <View style={styles.icon}>
                        <Icon name={'eye'} number={view} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}