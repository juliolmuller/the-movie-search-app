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
