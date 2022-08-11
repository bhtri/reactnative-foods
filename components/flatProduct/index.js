import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Icon from '../icon'
import styles from './styles'
import { removeProductFavorite, toggleFavorite } from '../../store/slices/favorite'
import { removeProductView } from '../../store/slices/viewed'

export default FlatProduct = ({ navigation, id, heart, title, thumb }) => {
    const dispatch = useDispatch();

    const favorites     = useSelector((state) => state.favorite.items);
    const isFavorite    = favorites.includes(id);
    const iconFavorite  = isFavorite ? "heart" : "heart-o";

    const onFavorite = () => {
        dispatch(toggleFavorite({id}));
    }

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
                    onPress: () => {
                        heart
                        ? dispatch(removeProductView({ id: id }))
                        : dispatch(removeProductFavorite({ id: id }))
                    }
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
                        ? (<TouchableOpacity onPress={onFavorite}  style={styles.iconBox}>
                            <Icon name={iconFavorite} />
                        </TouchableOpacity>)
                        : <View />
                }
                <TouchableOpacity onPress={trashProduct} style={styles.iconBox}>
                    <Icon name={'trash'} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
