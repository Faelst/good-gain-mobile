import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../utils/size'

export const Container = styled.View`
  height: ${rsize(54, "w")}px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  border-radius: ${rsize(27, "w")}px;
  padding-left: ${rsize(19, "w")}px;
  background-color: #FFF;
`
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#8d97b5'
})`
  width: 100%;
  margin: 0 ${rsize(16, "w")}px 0 ${rsize(16, "w")}px;
  font-family: Montserrat;
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.lg + 1}px;
  color: #8d97b5;
`
export const SearchIcon = styled(Feather).attrs({
  name: "search",
  size: rsize(24, "w"),
})`
  color:#8D97B5;
`
