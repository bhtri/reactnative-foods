import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style'

export default function HomeScreen() {
  const changeScreen = () => {

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeScreen} style={styles.box}>
        <Text>Go to CategoryScreen</Text>
      </TouchableOpacity>
    </View>
  )
}