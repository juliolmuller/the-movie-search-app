import React from 'react'
import tmdb from '../../../services/tmdb'
import { Card, Thumbnail, Details, MovieYear, MovieTitle, MovieRating } from './styled'

const MovieCard = ({ backdrop_path, release_date, title, vote_average }) => (
  <Card>
    <Thumbnail source={{ uri: tmdb.thumbURL + backdrop_path }} />
    <Details>
      <MovieYear>{new Date(release_date).getFullYear()}</MovieYear>
      <MovieTitle>{title}</MovieTitle>
    </Details>
    <MovieRating>
      {vote_average.toFixed(1)}
    </MovieRating>
  </Card>
)

export default MovieCard
