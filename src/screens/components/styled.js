import Styled from 'styled-components/native'

export const BaseCard = Styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #ddd;
  margin-bottom: 5px;
  margin-top: 5px;
`

export const BaseThumbnail = Styled.Image`
  resize-mode: cover;
  height: 75px;
  width: 100px;
`

export const RatingBadge = Styled.Text`
  border-radius: 10px;
  margin: 10px;
  padding: 6px;
  color: #fff;

  background-color: ${(props) => {
    const rating = Number(props.children)

    if (isNaN(rating)) {
      return '#000'
    }
    if (rating >= 7.5) {
      return '#21c239'
    }
    if (rating >= 5) {
      return '#f5cb42'
    }
    if (rating >= 2.5) {
      return '#c25f21'
    }
    return '#f00'
  }};
`

export const DetailsContainer = Styled.ScrollView`
  flex: 1;
`

export const AdditionalDetails = Styled.View`
  padding: 12px 12px 36px;
`

export const DetailsTitle = Styled.Text`
  margin-top: 1px;
  text-align: center;
  font-size: 30px;
`

export const DetailsTopic = Styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom-color: #aaa;
  border-bottom-width: 1px;
  font-style: italic;
  font-size: 18px;
`

export const DetailsText = Styled.Text`
  line-height: 20px;
  font-size: 14px;
`

export const GenrePillsWrapper = Styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

export const GenrePill = Styled.Text`
  margin: 0 4px 10px;
  padding: 6px 10px;
  background-color: #ddd;
  border-radius: 14px;
  font-size: 14px;
  color: darkblue;
`
