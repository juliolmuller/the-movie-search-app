import React from 'react'
import { Image } from 'react-native'
import { Wrapper } from './styled'
import animation from '../../../images/loading.gif'

const LoadingAnimation = () => (
  <Wrapper>
    <Image source={animation} />
  </Wrapper>
)

export default LoadingAnimation
