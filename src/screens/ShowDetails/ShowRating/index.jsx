import React from 'react'
import { Container, VotesAverage, VotesCount } from './styled'
import { withThousandSeparator } from '../../../utils'

function ShowRating({ votesAverage, votesCount }) {
  return (
    <Container>
      <VotesAverage>
        {Number(votesAverage).toFixed(1)}
      </VotesAverage>
      <VotesCount>
        {withThousandSeparator(votesCount)} votes
      </VotesCount>
    </Container>
  )
}

export default ShowRating
