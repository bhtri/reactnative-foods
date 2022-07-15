import { View, FlatList } from 'react-native'
import React from 'react'

import styles from './style'
import { FlatCategory } from '../../components'
import { PRODUCTS } from '../../data'

export default function CategoryScreen({ navigation, route }) {

  const { categoryId, categoryName } = route.params;
  const productData = PRODUCTS.filter(item => item.categoryId === categoryId);

  const renderGridCategory = ({ item }) => {
    return (
      <FlatCategory
        title={item.title}
        thumb={item.thumb}
        view={item.view}
        favorite={item.favorite}
        onPress={() => {
          navigation.push('ProductScreen', {
            productId: item.id,
            productName: item.title,
          });
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={productData}
        renderItem={renderGridCategory}
        keyExtractor={item => item.id}
      />
    </View>
  )
}