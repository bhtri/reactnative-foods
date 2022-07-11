import { View } from 'react-native'
import React from 'react'

import styles from './style'
import { Category } from './../../components';

export default function HomeScreen({ navigation }) {

  const changeScreen = () => {
    navigation.push('CategoryScreen', {});
  }

  return (
    <View style={styles.container}>
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </View>
  )
}