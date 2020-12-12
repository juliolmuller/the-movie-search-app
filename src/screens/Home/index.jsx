import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SearchInput from './SearchInput'
import MovieCard from './MovieCard'
import { TO_DETAILS } from '../../routes'
import tmdb from '../../services/tmdb'

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
      <SearchInput
        value={searchText}
        onChangeText={setSearchText}
      />
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

export default Home
