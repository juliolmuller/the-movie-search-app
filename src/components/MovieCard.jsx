import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const MovieCard = ({ title }) => (
  <TouchableOpacity
    style={[styles.todo, styles.pending]}
    onPress={console.log}
  >
    <Text style={[styles.label, styles.pending]}>
      {title}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  label: {
    fontSize: 20,
  },
  completed: {
    backgroundColor: '#666',
    color: '#fff',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  pending: {
    backgroundColor: '#ffde03',
    color: '#000',
  },
})

export default MovieCard
