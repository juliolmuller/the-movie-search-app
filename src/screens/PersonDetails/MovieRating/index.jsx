import React from 'react'
import { Container, VotesAverage, VotesCount } from './styled'
import { withThousandSeparator } from '../../../utils'

const MovieRating = ({ votesAverage, votesCount }) => (
  <Container>
    <VotesAverage>
      {Number(votesAverage).toFixed(1)}
    </VotesAverage>
    <VotesCount>
      {withThousandSeparator(votesCount)} votes
    </VotesCount>
  </Container>
)

export default MovieRating
