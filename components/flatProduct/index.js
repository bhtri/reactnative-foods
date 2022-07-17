import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import Icon from '../icon'
import styles from './styles'
import { removeProductFavorite } from '../../store/slices/favorite'

export default FlatProduct = ({ id, heart, title, thumb }) => {
    const dispatch = useDispatch();

    const trashProduct = () => {
        dispatch(removeProductFavorite({id: id}));
    }

    return (
        <TouchableOpacity style={styles.productBox} >
            <View style={styles.product}>
                <View style={styles.productBoxImage}>
                    <Image style={styles.productImage} source={thumb} />
                </View>
                <View style={styles.productBoxTitle}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
            <View style={styles.icon}>
                {
                    heart
                        ? (<View style={styles.iconBox}>
                            <Icon name={'heart'} />
                        </View>)
                        : <View />
                }
                <TouchableOpacity onPress={trashProduct} style={styles.iconBox}>
                    <Icon name={'trash'} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
