import { View, FlatList, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import styles from './style'
import { FlatProduct } from '../../components'
import { PRODUCTS } from '../../data'

export default function FavoriteScreen({ navigation }) {
  const favoriteData = useSelector(state => state.favorite.items);
  const products = favoriteData.map(itemID => PRODUCTS.find(item => item.id === itemID));

  const renderGridProduct = ({ item }) => {
    return (
      <FlatProduct
        id={item.id}
        title={item.title}
        thumb={item.thumb}
        navigation={navigation}
      />
    );
  }

  const renderEmpty = () => {
    return (
      <View>
        <Text>List Empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderGridProduct}
        keyExtractor={item => item.id}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  )
}