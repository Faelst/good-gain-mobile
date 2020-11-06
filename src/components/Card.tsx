import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import { rsize } from '../utils/size'

interface CardProps {
  marginTop?: boolean;
}

export const Card = styled(RectButton)<CardProps>`
  width: 100%;

  background-color: #FCFCFC;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.06);
  border-radius: ${rsize(7, "w")}px;
  ${props =>
    props.marginTop &&
    css`
      margin-top: ${rsize(11, "w")}px;
    `}
`
export const CardMedia = styled(RectButton)`
  width: 100%;
  border-radius: ${rsize(15, "w")}px;
  background-color: #FCFCFC;
`
