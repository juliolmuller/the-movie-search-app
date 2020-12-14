import { Dimensions } from 'react-native'
import Styled from 'styled-components/native'

export const Carousel = Styled.FlatList`
  height: 240px;
`

export const Image = Styled.Image`
  resize-mode: cover;
  height: 240px;
  width: ${Dimensions.get('window').width}px;
`
