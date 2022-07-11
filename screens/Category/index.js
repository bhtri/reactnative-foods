import { View, ScrollView } from 'react-native'
import React from 'react'

import styles from './style'
import { FlatCategory } from '../../components'

export default function CategoryScreen() {

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatCategory />
        <FlatCategory />
        <FlatCategory />
        <FlatCategory />
        <FlatCategory />
      </ScrollView>
    </View>
  )
}