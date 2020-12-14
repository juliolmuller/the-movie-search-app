import React, { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SearchInput from './SearchInput'
import ShowCard from './ShowCard'
import PersonCard from './PersonCard'
import tmdb from '../../services/tmdb'
import { mixArrays } from '../../utils'

const Home = () => {
  const { navigate } = useNavigation()
  const [searchText, setSearchText] = useState('')
  const [tvShows, setTvShows] = useState([])
  const [movies, setMovies] = useState([])
  const [people, setPeople] = useState([])
  const allResults = mixArrays(tvShows, movies, people)

  const handleSearch = () => {
    const params = {
      include_adult: false,
      query: searchText,
    }

    tmdb.get('/search/tv', { params }).then((response) => setTvShows(response.data.results))
    tmdb.get('/search/movie', { params }).then((response) => setMovies(response.data.results))
    tmdb.get('/search/person', { params }).then((response) => setPeople(response.data.results))
  }

  return (
    <>
      <SearchInput
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={() => searchText && handleSearch()}
      />
      <FlatList
        data={allResults}
        keyExtractor={({ id }) => `${id}`}
        renderItem={({ item }) => item.backdrop_path !== undefined ? (
          <TouchableOpacity onPress={() => navigate('MovieDetails', item)}>
            <ShowCard {...item} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigate('MovieDetails', item)}>
            <PersonCard {...item} />
          </TouchableOpacity>
        )}
      />
    </>
  )
}

export default Home
