import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import BackdropsCarousel from './BackdropsCarousel'
import MovieRating from './MovieRating'
import tmdb from '../../services/tmdb'
import styles from './styles'

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
      <BackdropsCarousel
        imagesURI={movie.backdrops
          ? movie.backdrops.map(({ file_path }) => tmdb.thumbURL + file_path)
          : [tmdb.thumbURL + movie.backdrop_path]
        }
      />

      <Text style={styles.title}>
        {movie.title}
      </Text>

      <View style={styles.details}>
        {movie.vote_count && (
          <MovieRating votesAverage={movie.vote_average} votesCount={movie.vote_count} />
        )}

        {movie.overview && <>
          <Text style={styles.topicTitle}>Synopsis</Text>
          <Text style={styles.topicText}>{movie.overview}</Text>
        </>}

        {movie.genres?.length && <>
          <Text style={styles.topicTitle}>Genres</Text>
          <View style={styles.genreContainer}>
            {movie.genres.map((genre) => (
              <Text key={genre.id} style={styles.genre}>{genre.name}</Text>
            ))}
          </View>
        </>}

        {movie.release_date && <>
          <Text style={styles.topicTitle}>Release Date</Text>
          <Text style={styles.topicText}>{movie.release_date}</Text>
        </>}

        {movie.budget && <>
          <Text style={styles.topicTitle}>Budget</Text>
          <Text style={styles.topicText}>{movie.budget}</Text>
        </>}

        {movie.revenue && <>
          <Text style={styles.topicTitle}>Revenue</Text>
          <Text style={styles.topicText}>{movie.revenue}</Text>
        </>}
      </View>
    </ScrollView>
  )
}

export default MovieDetails
