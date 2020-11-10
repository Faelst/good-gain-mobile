import styled from 'styled-components/native';
import { rsize } from '../utils/size'

export const Card = styled.View`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundLighter};
  border-radius: ${rsize(7, "w")}px;
`
export const CardMedia = styled.View`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundLighter};
  border-radius: ${rsize(30, "w")}px;
`
