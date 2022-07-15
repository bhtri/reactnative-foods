import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

import styles from './style'
import { Icon } from '../../components'
import { PRODUCTS } from '../../data'

export default function ProductScreen({ navigation, route }) {
  const { productId, productName } = route.params
  const product = PRODUCTS.find(item => item.id === productId)
  const { id, categoryId, title, thumb, view, favorite, intro, ingredients, instructions } = product

  return (
    <View style={styles.product}>
      <Image style={styles.background} source={require('../../assets/images/background.png')} />
      <View style={styles.productImg}>
        <Image style={styles.img} source={thumb} />
        <View style={[styles.productImgIcon, styles.productImgIconLeft]}>
          <Icon name={'heart'} number={favorite} />
        </View>
        <View style={[styles.productImgIcon, styles.productImgIconRight]}>
          <Icon name={'eye'} number={view} />
        </View>
      </View>
      <View style={styles.productContent}>
        <ScrollView>
          <Text style={[styles.text, styles.productContentText]}>{intro}</Text>
          <View style={styles.productContentBox}>
            <View style={styles.productContentBoxTitle}>
              <Text style={[styles.textTitle]}>Nguyên liệu</Text>
            </View>
            <Text style={[styles.text, styles.productContentBoxContent]}>
              {ingredients}
            </Text>
          </View>
          <View style={styles.productContentBox}>
            <View style={styles.productContentBoxTitle}>
              <Text style={[styles.textTitle]}>Cách làm</Text>
            </View>
            <Text style={[styles.text, styles.productContentBoxContent]}>
              {instructions}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}