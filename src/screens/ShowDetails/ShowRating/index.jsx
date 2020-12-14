import React from 'react'
import { Container, VotesAverage, VotesCount } from './styled'
import { withThousandSeparator } from '../../../utils'

const ShowRating = ({ votesAverage, votesCount }) => (
  <Container>
    <VotesAverage>
      {Number(votesAverage).toFixed(1)}
    </VotesAverage>
    <VotesCount>
      {withThousandSeparator(votesCount)} votes
    </VotesCount>
  </Container>
)

export default ShowRating
