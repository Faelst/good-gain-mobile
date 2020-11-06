import styled, { css } from 'styled-components/native';
import { CardMedia } from '../Card'
import CustomTag from '../CustomTag'
import CustomTextBase from '../CustomTextBase'
import TextBold from '../TextBold'
import { Feather, FontAwesome5 } from '@expo/vector-icons'
import { rsize } from '../../utils/size'

interface CardProps {
  marginTop?: boolean
}

export const Container = styled(CardMedia)<CardProps>`
  min-height: ${rsize(232, "w")}px;

  padding: ${rsize(14, "w")}px;
  ${props =>
    props.marginTop === true ?
    css`
      margin-top: ${rsize(14, "w")}px;
    ` :
    css`
      margin-top: ${rsize(0, "w")}px;
    `}
`
export const Content = styled.View`
  flex-direction: row;
  padding-top: ${rsize(9, "w")}px;
`
export const DescriptionContainer = styled.View`
  flex: 6;
`
export const IconContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`
export const Image = styled.Image`
  height: ${rsize(137, "w")}px;
  width: 100%;

  flex: 1;
  border-radius: ${rsize(15, "w")}px;
`
export const Title = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.md - 1}px;
  line-height: ${props => props.theme.fontSizes.lg}px;
  text-align: left;
  color: #303030;
`
export const SubTitle = styled(CustomTextBase)`
  margin-top: ${rsize(4, "w")}px;

  font-size: ${props => props.theme.fontSizes.xxs}px;
  line-height: ${props => props.theme.fontSizes.xs}px;
  color: #8D97B5;
`
export const SubTitle2 = styled(SubTitle)`
  margin-top: ${rsize(7, "w")}px;
`
export const Tag = styled(CustomTag)`
  width: ${rsize(37, "w")}px;

  margin-top: ${rsize(7, "w")}px;
  background: #545AF0;
`
export const IconChevronRight = styled(Feather).attrs({
  name: "chevron-right",
  size: rsize(26, "w"),
})`
  color: #8D97B5;
`
export const IconMapPin = styled(Feather).attrs({
  name: "map-pin",
  size: rsize(10, "w"),
})`
  color: #8D97B5;
`
export const IconPhone = styled(Feather).attrs({
  name: "phone",
  size: rsize(10, "w"),
})`
  color: #8D97B5;
`