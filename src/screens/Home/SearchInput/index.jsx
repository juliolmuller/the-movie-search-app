import React from 'react'
import { TextInput, View } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import styles from './styles'

const SearchInput = (props) => (
  <View style={styles.container}>
    <Icon name="search" size={24} />
    <TextInput
      style={styles.input}
      placeholder="Search..."
      autoCapitalize="none"
      {...props}
    />
  </View>
)

export default SearchInput
