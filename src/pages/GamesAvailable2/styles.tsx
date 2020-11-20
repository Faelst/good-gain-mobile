import React from 'react'
import styled from 'styled-components/native';
import TextBold from '../../components/TextBold'
import CustomTextBase from '../../components/CustomTextBase'
import { BorderlessButton } from 'react-native-gesture-handler'
import ButtonGradient from '../../components/ButtonGradient'
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../utils/size'

import bnChampionship from '../../images/bn_home1.png'

export const Container = styled.View`
  flex: 1;
  margin-top: ${props => props.theme.StatusBarHeight}px;
  padding-bottom: ${rsize(44)}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
export const CustomBorderlessButton: React.FC<any> = ({...props}) => {
  return (
    <BorderlessButton {...props}>
      <IconCancel />
    </BorderlessButton>
  )
};
export const ButtonCancel = styled(CustomBorderlessButton)`
  height: ${rsize(24)}px;
  width: ${rsize(24)}px;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  margin-top: ${rsize(24)}px;
  margin-right: ${rsize(24)}px;
`
export const Image = styled.Image.attrs({
  source: bnChampionship
})`
  height: ${rsize(151)}px;
  width: ${rsize(320)}px;
  align-self: center;
  margin-top: ${rsize(12)}px;
  border-radius: ${rsize(40)}px;
`
export const Title = styled(TextBold)`
  align-self: center;
  margin-top: ${rsize(35)}px;
  margin-bottom: ${rsize(21)}px;

  font-size: ${props => props.theme.fontSizes.xxl - 3}px;
  color: ${props => props.theme.colors.primary};
`
export const Button = styled(ButtonGradient)`
  align-self: center;
`
export const Strong = styled(TextBold)`
  width: ${rsize(325)}px;
  align-self: center;
  padding: 0 ${rsize(8)}px 0 ${rsize(8)}px;
  margin-top: ${rsize(20)}px;

  text-align: center;
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.xl}px;
`
export const Span = styled(CustomTextBase)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.xl}px;
  color: ${props => props.theme.colors.subtitle};
`
export const Divider = styled.View`
  height: ${rsize(1)}px;
  width: ${rsize(287)}px;
  align-self: center;
  margin-top: ${rsize(43)}px;
  margin-bottom: ${rsize(44)}px;
  background-color: ${props => props.theme.colors.textSecondary};
`
export const IconCancel = styled(Feather).attrs({
  name: "x",
  size: rsize(24),
})`
  color: ${props => props.theme.colors.primary};
`
