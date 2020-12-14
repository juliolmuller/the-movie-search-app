import React from 'react'
import tmdb from '../../../services/tmdb'
import { Card, Thumbnail, Details, ShowYear, ShowTitle, ShowRating } from './styled'

const ShowCard = ({ backdrop_path, release_date, first_air_date, title, name, vote_average }) => (
  <Card>
    <Thumbnail source={{ uri: tmdb.thumbURL + backdrop_path }} />
    <Details>
      <ShowYear>
        {new Date(release_date ?? first_air_date).getFullYear()}
      </ShowYear>
      <ShowTitle>
        {title ?? name}
      </ShowTitle>
    </Details>
    <ShowRating>
      {vote_average.toFixed(1)}
    </ShowRating>
  </Card>
)

export default ShowCard
