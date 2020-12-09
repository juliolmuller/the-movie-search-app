import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import MovieCard from '../components/MovieCard'
import tmdb from '../services/tmdb'

const Home = () => {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const params = {
      include_adult: false,
      query: searchText,
    }

    tmdb
      .get('/search/movie', { params })
      .then(({ data }) => setMovies(data.results))
      .catch(console.log)
  }, [searchText])

  return (
    <>
      <View style={styles.searchForm}>
        <Icon name="search" size={24} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 32 }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  searchForm: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 12,
    padding: 8,
    margin: 10,
  },
  searchInput: {
    flexGrow: 1,
    fontSize: 20,
    marginLeft: 8,
  },
})

export default Home
