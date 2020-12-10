import axios from 'axios'
import Constants from 'expo-constants'

const {
  TMDB_API_KEY,
  TMDB_API_URL,
  TMDB_PICTURE_URL,
  TMDB_THUMBNAIL_URL,
} = Constants.manifest.extra

const http = axios.create({
  baseURL: TMDB_API_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
})

Object.defineProperties(http, {
  imageURL: { get: () => TMDB_PICTURE_URL },
  thumbURL: { get: () => TMDB_THUMBNAIL_URL },
})

export default http
