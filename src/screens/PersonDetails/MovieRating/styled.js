import Styled from 'styled-components/native'
import { RatingBadge } from '../../components/styled'

export const Container = Styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const VotesAverage = Styled(RatingBadge)`
  font-size: 24px;
`

export const VotesCount = Styled.Text`
  font-size: 18px;
`
