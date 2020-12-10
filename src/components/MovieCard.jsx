import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import tmdb from '../services/tmdb'

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

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  thumbnail: {
    resizeMode: 'cover',
    width: 100,
    height: 75,
  },
  details: {
    flex: 1,
    paddingHorizontal: 5,
  },
  title: {
    color: '#111',
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    color: '#333',
  },
  evaluation: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  rate: {
    borderRadius: 10,
    padding: 6,
    color: '#fff',
  },
  scale(rate) {
    let backgroundColor

    if (rate >= 7.5) {
      backgroundColor = '#21c239'
    } else if (rate >= 5) {
      backgroundColor = '#f5cb42'
    } else if (rate >= 2.5) {
      backgroundColor = '#c25f21'
    } else {
      backgroundColor = '#f00'
    }

    return { backgroundColor }
  },
})

export default MovieCard
