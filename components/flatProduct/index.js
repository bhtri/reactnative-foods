import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Icon from '../icon'
import styles from './styles'

export default FlatProduct = ({ heart }) => {
    return (
        <TouchableOpacity style={styles.productBox} >
            <View style={styles.product}>
                <View style={styles.productBoxImage}>
                    <Image style={styles.productImage} source={require('../../assets/images/wrapper.png')} />
                </View>
                <View style={styles.productBoxTitle}>
                    <Text style={styles.title}>Cillum tempor aute sint eli. tempor</Text>
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
                <View style={styles.iconBox}>
                    <Icon name={'trash'} />
                </View>
            </View>
        </TouchableOpacity>
    )
}
