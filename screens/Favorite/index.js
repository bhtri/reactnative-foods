import { View, Text } from 'react-native'
import React from 'react'

import styles from './style'
import { FlatProduct } from '../../components'

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <FlatProduct />
      <FlatProduct />
      <FlatProduct />
    </View>
  )
}