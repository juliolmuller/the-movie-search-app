import Styled from 'styled-components/native'
import { BaseCard, BaseThumbnail } from '../../components/styled'

export const Card = Styled(BaseCard)``

export const Thumbnail = Styled(BaseThumbnail)``

export const Details = Styled.View`
  flex: 1;
  padding-left: 5px;
  padding-right: 5px;
`

export const Department = Styled.Text`
  color: #333;
`

export const PersonName = Styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #111;
`
