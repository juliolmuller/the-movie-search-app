import React from 'react'
import { Carousel, Image } from './styled'

const ImagesCarousel = ({ imagesURI }) => (
  <Carousel
    horizontal
    pagingEnabled
    data={imagesURI}
    keyExtractor={(uri) => uri}
    renderItem={({ item: uri }) => (
      <Image source={{ uri }} />
    )}
  />
)

export default ImagesCarousel
