import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './style'
import { Category } from './../../components';
import { CATEGORIES } from '../../data';

export default function HomeScreen({ navigation }) {

  const changeScreen = () => {
    navigation.push('CategoryScreen', {});
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        renderItem={() => <Category />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}