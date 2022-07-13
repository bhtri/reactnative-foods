import { View, Text } from 'react-native'
import React from 'react'

import styles from './style'
import { FlatProduct } from '../../components'

export default function SeenScreen() {
  return (
    <View style={styles.container}>
       <FlatProduct heart />
       <FlatProduct heart />
       <FlatProduct heart />
    </View>
)
}