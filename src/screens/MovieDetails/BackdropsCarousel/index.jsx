import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import styles from './styles'

const BackdropsCarousel = ({ imagesURI }) => (
  <View style={styles.container}>
    <ScrollView horizontal pagingEnabled>
      {imagesURI.map((uri) => (
        <Image key={uri} style={styles.image} source={{ uri }} />
      ))}
    </ScrollView>
  </View>
)

export default BackdropsCarousel
