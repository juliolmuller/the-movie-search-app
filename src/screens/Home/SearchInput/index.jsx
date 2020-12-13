import React from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { Container, Input } from './styled'

const SearchInput = (props) => (
  <Container>
    <Icon name="search" size={24} />
    <Input placeholder="Search..." autoCapitalize="none" {...props} />
  </Container>
)

export default SearchInput
