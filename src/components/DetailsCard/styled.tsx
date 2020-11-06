import styled, { css } from 'styled-components/native';
import CustomTextBase from '../CustomTextBase'
import TextBold from '../TextBold'
import { Card } from '../Card'
import { rsize } from '../../utils/size'

interface ContainerProps {
  marginLeft?: boolean;
}

export const Container = styled(Card)<ContainerProps>`
  flex: 1;
  height: ${rsize(49, "w")}px;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.marginLeft &&
    css`
      margin-left: ${rsize(7, "w")}px;
    `}
`
export const ImageContainer = styled.View`
  width: ${rsize(33, "w")}px;
  height: ${rsize(33, "w")}px;

  justify-content: center;
  align-items: center;
  background: rgba(51, 200, 153, 0.15);
  border-radius: ${rsize(7, "w")}px;
  margin-left: ${rsize(8, "w")}px;
`
export const Image = styled.Image`
  height: ${rsize(15, "w")}px;
  width: ${rsize(15, "w")}px;
`
export const Description = styled.View`
  margin-left: ${rsize(8, "w")}px;
`
export const Title = styled(CustomTextBase)`
  height: ${rsize(12, "w")}px;

  font-size: ${props => props.theme.fontSizes.xxs}px;
  line-height: ${props => props.theme.fontSizes.xs}px;
  color: #8D97B5;
`
export const Subtitle = styled(TextBold)`
  height: ${rsize(17, "w")}px;

  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg - 1}px;
  color: #303030;
`