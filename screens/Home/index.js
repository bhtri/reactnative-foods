import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './style'
import { Category } from './../../components';
import { CATEGORIES } from '../../data';

export default function HomeScreen({ navigation }) {

  const renderGridCategory = ({ item }) => {
    return (
      <Category
        title={item.title}
        thumb={item.thumb}
        onPress={() => {
          navigation.push('CategoryScreen', {
            categoryId: item.id,
            categoryName: item.title,
          });
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        renderItem={renderGridCategory}
        keyExtractor={item => item.id}
      />
    </View>
  )
}