import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { useDispatch } from 'react-redux'

import Icon from '../icon'
import styles from './styles'
import { removeProductFavorite } from '../../store/slices/favorite'

export default FlatProduct = ({ navigation, id, heart, title, thumb }) => {
    const dispatch = useDispatch();

    const trashProduct = () => {
        Alert.alert(
            "Thong Bao",
            "Ban co muon xoa???",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => dispatch(removeProductFavorite({ id: id }))
                }
            ]
        );

    }

    const changeScreenProduct = () => {
        navigation.navigate('ProductScreen', {
            productId: id,
            productName: title,
        });
    }

    return (
        <TouchableOpacity onPress={changeScreenProduct} style={styles.productBox} >
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
