import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

import styles from './style'
import { Icon } from '../../components'

export default function ProductScreen() {
  return (
    <View style={styles.product}>
      <Image style={styles.background} source={require('../../assets/images/background.png')} />
      <View style={styles.productImg}>
        <Image style={styles.img} source={require('../../assets/images/wrapper.png')} />
        <View style={[styles.productImgIcon, styles.productImgIconLeft]}>
          <Icon name={'heart'} number={123} />
        </View>
        <View style={[styles.productImgIcon, styles.productImgIconRight]}>
          <Icon name={'eye'} number={123} />
        </View>
      </View>
      <View style={styles.productContent}>
        <ScrollView>
          <Text style={[styles.text, styles.productContentText]}>Pariatur consectetur ut quis cupidatat magna adipisicing cupidatat amet dolore velit. Aute cillum consequat tempor adipisicing. Deserunt proident adipisicing adipisicing nostrud dolore ex do est mollit.</Text>
          <View style={styles.productContentBox}>
            <View style={styles.productContentBoxTitle}>
              <Text style={[styles.textTitle]}>Nguyên liệu</Text>
            </View>
            <Text style={[styles.text, styles.productContentBoxContent]}>
              Pariatur consectetur ut quis cupidatat
              magna adipisicing cupidatat amet dolore velit
              Aute cillum consequat tempor adipisicing.
              Deserunt proident adipisicing adipisicing nostrud dolore ex do est mollit.
            </Text>
          </View>
          <View style={styles.productContentBox}>
            <View style={styles.productContentBoxTitle}>
              <Text style={[styles.textTitle]}>Nguyên liệu</Text>
            </View>
            <Text style={[styles.text, styles.productContentBoxContent]}>
              Pariatur consectetur ut quis cupidatat
              magna adipisicing cupidatat amet dolore velit
              Aute cillum consequat tempor adipisicing.
              Deserunt proident adipisicing adipisicing nostrud dolore ex do est mollit.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}