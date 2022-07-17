import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import styles from './style'
import { FlatProduct } from '../../components'
import { PRODUCTS } from '../../data'

export default function SeenScreen({ navigation }) {
  const viewedData = useSelector(state => state.viewed.items);
  const products = viewedData.map(itemID => PRODUCTS.find(item => item.id === itemID));

  const renderGridProduct = ({ item }) => {
    return (
      <FlatProduct
        heart={true}
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