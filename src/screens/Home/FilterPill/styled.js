import Styled from 'styled-components/native'

export const Pill = Styled.Text`
  height: 40px;
  margin: 0 8px 4px;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 17px;

  background-color: ${({ enabled }) => enabled ? '#111' : '#ccc'};
  color: ${({ enabled }) => enabled ? '#eee' : '#111'};
`
