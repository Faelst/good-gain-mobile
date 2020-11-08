import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import { rsize } from '../utils/size'

export const Card = styled(RectButton)`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundLighter};
  border-radius: ${rsize(7, "w")}px;
`
export const CardMedia = styled(Card)`
  border-radius: ${rsize(30, "w")}px;
`
