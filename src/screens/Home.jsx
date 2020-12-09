import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TO_DETAILS } from '../routes'
import MovieCard from '../components/MovieCard'
import tmdb from '../services/tmdb'

const Home = () => {
  const { navigate } = useNavigation()
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
          autoCapitalize="none"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <FlatList
        data={movies}
        keyExtractor={({ id }) => `${id}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigate(TO_DETAILS, item)}>
            <MovieCard {...item} />
          </TouchableOpacity>
        )}
      />
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
