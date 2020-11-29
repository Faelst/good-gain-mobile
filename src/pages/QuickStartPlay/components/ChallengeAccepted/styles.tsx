import styled from 'styled-components/native';
import ButtonGradient from "../../../../components/ButtonGradient"
import { LinearGradient as LinearGradientBase } from 'expo-linear-gradient'
import TextBold from "../../../../components/TextBold";
import CustomTextBase from '../../../../components/CustomTextBase';
import { rsize } from "../../../../utils/size";

import imageBG from '../../../../images/bn_home1.png'

export const Container = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: ${rsize(32)}px;
`
export const Title = styled(TextBold)`
  margin-top: ${rsize(29)}px;

  font-size: ${props => props.theme.fontSizes.xl + 2}px;
  line-height: ${props => props.theme.fontSizes.xl + 2}px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`
export const Span = styled(CustomTextBase)`
  margin-top: ${rsize(31)}px;
  margin-bottom: ${rsize(32)}px;

  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.md}px;
  text-align: center;
  color: ${props => props.theme.colors.textColor};
`
export const Button = styled(ButtonGradient)`
  height: ${rsize(57)}px;
  width: ${rsize(325)}px;
`
export const ImageBackground = styled.ImageBackground.attrs({
  source: imageBG
})`
  height: ${rsize(151)}px;
  width: ${rsize(320)}px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin-top: ${rsize(20)}px;
  border-radius: ${rsize(40)}px;
`
export const LinearGradient = styled(LinearGradientBase).attrs(props => ({
  colors: props.theme.colors.gradient,
}))`
  height: ${rsize(151)}px;
  width: ${rsize(320)}px;
  border-radius: ${rsize(40)}px;
  opacity: 0.2;
`
