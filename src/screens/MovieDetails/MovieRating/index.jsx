import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const MovieRating = ({ votesAverage, votesCount }) => (
  <View style={styles.container}>
    <Text style={styles.average}>{votesAverage}</Text>
    <Text style={styles.count}>{votesCount} votes</Text>
  </View>
)

export default MovieRating
