import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MovieCard = ({ title }) => (
  <View style={styles.card}>
    <Text style={styles.title}>
      {title}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#111',
    marginBottom: 10,
    padding: 4,
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
})

export default MovieCard
