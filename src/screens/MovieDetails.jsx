import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tmdb from '../services/tmdb'

const MovieDetails = ({ route }) => {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    tmdb
      .get(`/movie/${route.params.id}`)
      .then(({ data }) => setMovie(data))
      .catch(console.log)
  }, [route.params.id])

  return movie && (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        {movie.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
})

export default MovieDetails
