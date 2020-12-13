import Styled from 'styled-components/native'
import { RatingBadge } from '../../components/styled'

export const Card = Styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #ddd;
  margin-bottom: 5px;
  margin-top: 5px;
`

export const Thumbnail = Styled.Image`
  resize-mode: cover;
  width: 100px;
  height: 75px;
`

export const Details = Styled.View`
  flex: 1;
  padding-left: 5px;
  padding-right: 5px;
`

export const MovieYear = Styled.Text`
  color: #333;
`

export const MovieTitle = Styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #111;
`

export const MovieRating = Styled(RatingBadge)``
