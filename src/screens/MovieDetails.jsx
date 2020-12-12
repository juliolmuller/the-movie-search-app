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
    <ScrollView style={styles.wrapper}>
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

      <View style={styles.details}>
        <View style={styles.votesContainer}>
          <Text style={styles.votesAverage}>{movie.vote_average}</Text>
          <Text style={styles.votesCount}>{movie.vote_count} votes</Text>
        </View>

        {movie.overview && <>
          <Text style={styles.topic}>Synopsis</Text>
          <Text style={styles.overview}>{movie.overview}</Text>
        </>}

        {movie.genres?.length && <>
          <Text style={styles.topic}>Genres</Text>
          <View style={styles.genreContainer}>
            {movie.genres.map((genre) => (
              <Text key={genre.id} style={styles.genre}>{genre.name}</Text>
            ))}
          </View>
        </>}

        {movie.release_date && <>
          <Text style={styles.topic}>Release Date</Text>
        </>}

        {movie.budget && <>
          <Text style={styles.topic}>Budget</Text>
        </>}

        {movie.revenue && <>
          <Text style={styles.topic}>Revenue</Text>
        </>}
      </View>
    </ScrollView>
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
  votesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  votesAverage: {},
  votesCount: {},
  title: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 30,
  },
  details: {
    padding: 12,
  },
  overview: {
    fontSize: 14,
    lineHeight: 20,
  },
  topic: {
    marginTop: 20,
    marginBottom: 10,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    fontSize: 18,
    fontStyle: 'italic',
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genre: {
    marginBottom: 10,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: '#ddd',
    borderRadius: 14,
  },
})

export default MovieDetails
