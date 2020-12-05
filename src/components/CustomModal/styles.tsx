import styled from 'styled-components/native'
import { rsize } from '../../utils/size'

interface ContentProps {
  background?: string,
}
export const Content = styled.View<ContentProps>`
  width: 100%;
  align-items: center;
  border-top-left-radius: ${rsize(25)}px;
  border-top-right-radius: ${rsize(25)}px;
  background-color: ${props => props.background
  ? props.background
  : props.theme.colors.backgroundLight
  };
`
export const Indicator = styled.View`
  height: ${rsize(5)}px;
  width: ${rsize(114)}px;
  margin-top: ${rsize(15)}px;
  border-radius: ${rsize(3)}px;
  background-color: rgba(169,169,169,0.2);
`