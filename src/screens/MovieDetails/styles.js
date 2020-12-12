import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  title: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 30,
  },
  details: {
    padding: 12,
  },
  topicTitle: {
    marginTop: 20,
    marginBottom: 10,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    fontSize: 18,
    fontStyle: 'italic',
  },
  topicText: {
    fontSize: 14,
    lineHeight: 20,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genre: {
    marginBottom: 10,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
    borderRadius: 14,
    fontSize: 14,
    color: 'darkblue',
  },
})

export default styles
