import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import styles from './style'

export default function CategoryScreen() {
  const navigation = useNavigation();

  const changeScreen = () => {
    navigation.push('ProductScreen', {});
  }

  const callback = () => {
    navigation.pop();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeScreen} style={styles.box}>
        <Text>Go to ProductScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={callback} style={styles.box}>
        <Text>Back to HomeScreen</Text>
      </TouchableOpacity>
    </View>
  )
}