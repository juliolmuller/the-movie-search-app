import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
  thumbnail: {
    resizeMode: 'cover',
    width: 100,
    height: 75,
  },
  details: {
    flex: 1,
    paddingHorizontal: 5,
  },
  year: {
    color: '#333',
  },
  title: {
    color: '#111',
    fontSize: 18,
    fontWeight: 'bold',
  },
  evaluation: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  rate: {
    borderRadius: 10,
    padding: 6,
    color: '#fff',
  },
  scale(rate) {
    let backgroundColor

    if (rate >= 7.5) {
      backgroundColor = '#21c239'
    } else if (rate >= 5) {
      backgroundColor = '#f5cb42'
    } else if (rate >= 2.5) {
      backgroundColor = '#c25f21'
    } else {
      backgroundColor = '#f00'
    }

    return { backgroundColor }
  },
})

export default styles
