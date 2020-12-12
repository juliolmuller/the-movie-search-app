import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 240,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },
})

export default styles
