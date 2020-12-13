import React, { useEffect, useState } from 'react'
import { Container, Details, Title, TopicTitle, TopicText, PillsWrapper, Pill } from './styled'
import BackdropsCarousel from './BackdropsCarousel'
import MovieRating from './MovieRating'
import { dateFormat, withThousandSeparator } from '../../utils'
import tmdb from '../../services/tmdb'

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
    <Container>
      <BackdropsCarousel
        imagesURI={movie.backdrops
          ? movie.backdrops.map(({ file_path }) => tmdb.thumbURL + file_path)
          : [tmdb.thumbURL + movie.backdrop_path]
        }
      />

      <Details>
        <Title>{movie.title}</Title>

        {Boolean(movie.vote_count) && (
          <MovieRating votesAverage={movie.vote_average} votesCount={movie.vote_count} />
        )}

        {Boolean(movie.overview) && <>
          <TopicTitle>Synopsis</TopicTitle>
          <TopicText>{movie.overview}</TopicText>
        </>}

        {Boolean(movie.genres?.length) && <>
          <TopicTitle>Genres</TopicTitle>
          <PillsWrapper>
            {movie.genres.map((genre) => (
              <Pill key={genre.id}>{genre.name}</Pill>
            ))}
          </PillsWrapper>
        </>}

        {Boolean(movie.release_date) && <>
          <TopicTitle>Release Date</TopicTitle>
          <TopicText>
            {dateFormat(new Date(movie.release_date))}
          </TopicText>
        </>}

        {Boolean(movie.budget) && <>
          <TopicTitle>Budget</TopicTitle>
          <TopicText>
            ${withThousandSeparator(movie.budget)} USD
          </TopicText>
        </>}

        {Boolean(movie.revenue) && <>
          <TopicTitle>Revenue</TopicTitle>
          <TopicText>
            ${withThousandSeparator(movie.revenue)} USD
          </TopicText>
        </>}
      </Details>
    </Container>
  )
}

export default MovieDetails
