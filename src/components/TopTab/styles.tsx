import styled from 'styled-components/native';
import TextBold from '../../components/TextBold'
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../utils/size'

export const Container = styled.View`
  position: absolute;
  top: ${rsize(30, "w")}px;

  width: 100%;

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`
export const Spacing = styled.View`
  height: ${rsize(24, "w")}px;
  width: ${rsize(24, "w")}px;
`
export const Title = styled(TextBold)`
  flex: 1;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.lg}px;
  line-height: ${props => props.theme.fontSizes.xxl}px;
  color: #FFF;
`
  export const IconGoBack = styled(Feather).attrs({
    name: "chevron-left",
    size: rsize(28, "w"),
  })`
    color: white;
    text-align: left;
    left: ${rsize(-9, "w")}px;
  `
  export const RightIcon = styled(Feather).attrs({
    size: rsize(24, "w"),
  })`
    color: white;
    text-align: right;
  `