import Styled from 'styled-components/native'

export const Container = Styled.ScrollView`
  flex: 1;
`

export const Details = Styled.View`
  padding: 12px 12px 36px;
`

export const Title = Styled.Text`
  margin-top: 1px;
  text-align: center;
  font-size: 30px;
`

export const TopicTitle = Styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom-color: #aaa;
  border-bottom-width: 1px;
  font-style: italic;
  font-size: 18px;
`

export const TopicText = Styled.Text`
  line-height: 20px;
  font-size: 14px;
`

export const PillsWrapper = Styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

export const Pill = Styled.Text`
  margin: 0 4px 10px;
  padding: 6px 10px;
  background-color: #ddd;
  border-radius: 14px;
  font-size: 14px;
  color: darkblue;
`
