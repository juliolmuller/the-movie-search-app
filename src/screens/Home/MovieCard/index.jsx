import React from 'react'
import { Image, Text, View } from 'react-native'
import tmdb from '../../../services/tmdb'
import styles from './styles'

const MovieCard = ({ backdrop_path, release_date, title, vote_average }) => (
  <View style={styles.card}>
    <Image
      style={styles.thumbnail}
      source={{ uri: tmdb.thumbURL + backdrop_path }}
    />
    <View style={styles.details}>
      <Text style={styles.year}>
        {new Date(release_date).getFullYear()}
      </Text>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
    <View style={styles.evaluation}>
      <Text style={[styles.rate, styles.scale(vote_average)]}>
        {vote_average.toFixed(1)}
      </Text>
    </View>
  </View>
)

export default MovieCard
