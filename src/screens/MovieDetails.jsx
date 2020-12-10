import React, { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import tmdb from '../services/tmdb'

const MovieDetails = ({ route }) => {
  const [movie, setMovie] = useState(route.params)

  useEffect(() => {
    const responses = Promise.all([
      tmdb.get(`/movie/${route.params.id}`),
      tmdb.get(`/movie/${route.params.id}/images`),
    ])

    responses
      .then(([movieResponse, backdropResponse]) => {
        const movieData = movieResponse.data
        const { backdrops } = backdropResponse.data
        setMovie({ ...movieData, backdrops })
      })
      .catch((error) => {
        console.log(error)
        alert('ERROR: Unable to connect to server.')
      })
  }, [route.params.id])

  return (
    <View style={styles.wrapper}>
      <View style={styles.backdropContainer}>
        <ScrollView horizontal pagingEnabled>
          {movie.backdrops ? (
            movie.backdrops.map(({ file_path: uri }) => (
              <Image key={uri} style={styles.backdrop} source={{ uri: tmdb.thumbURL + uri }} />
            ))
          ) : (
            <Image style={styles.backdrop} source={{ uri: tmdb.thumbURL + movie.backdrop_path }} />
          )}
        </ScrollView>
      </View>

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
  backdropContainer: {
    height: 240,
  },
  backdrop: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
})

export default MovieDetails
