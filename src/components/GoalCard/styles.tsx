import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { Card } from '../Card'
import CustomTextBase from '../CustomTextBase'
import TextBold from '../TextBold'
import { rsize } from '../../utils/size'

interface ContainerProps {
  marginTop: boolean
}
export const Container = styled(Card)<ContainerProps>`
  height: ${rsize(93, "w")}px;
  ${props =>
    props.marginTop &&
    css`
      margin-top: ${rsize(15, "w")}px;
    `}
`
export const CardContent = styled.View`
  height: ${rsize(93, "w")}px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const GoalContent = styled.View`
  height: ${rsize(93, "w")}px;

  justify-content: space-between;
  padding: ${rsize(10, "w")}px 0 ${rsize(14, "w")}px 0;
`
export const GoalImage = styled.Image`
  height: ${rsize(61, "w")}px;
  width: ${rsize(49, "w")}px;

  margin: 0 ${rsize(24, "w")}px 0 ${rsize(15, "w")}px; 
`
export const GoalTitle = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg - 1}px;
  color: #303030;
`
export const GoalTitleBold = styled(TextBold)`
  color: #303030;
`
export const GoalText = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg - 1}px;
  color: #8D97B5;
`
export const IconCheck = styled(Feather).attrs(({
  name: "check-circle",
  size: rsize(15, "w"),
}))`
  color:#33C899;
`