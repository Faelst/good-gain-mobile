import styled from 'styled-components/native';
import ButtonGradient from "../../../../components/ButtonGradient"
import { LinearGradient } from 'expo-linear-gradient'
import { TextProps } from 'react-native'
import TextBold from "../../../../components/TextBold";
import TextGradientBase from '../../../../components/TextGradient'
import { rsize } from "../../../../utils/size";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: ${rsize(64)}px;
`
export const Title = styled(TextBold)`
  height: ${rsize(55)}px;
  width: ${rsize(240)}px;
  margin-top: ${rsize(45)}px;

  font-size: ${props => props.theme.fontSizes.xl + 2}px;
  line-height: ${props => props.theme.fontSizes.xl + 2}px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`
export const Main = styled.View`
  height: ${rsize(150)}px;
  width: ${rsize(325)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${rsize(49)}px 0 ${rsize(37)}px;
`
export const Button = styled(ButtonGradient)`
  height: ${rsize(57)}px;
  width: ${rsize(325)}px;
`
export const Border = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient
}))`
  height: ${rsize(156)}px;
  width: ${rsize(156)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(13)}px;
`
interface ImageProps {
  isFocused?: number
}
export const ImageBG = styled.ImageBackground<ImageProps>`
  height: ${rsize(150)}px;
  width: ${rsize(150)}px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(10)}px;
  opacity: ${props => props.isFocused === undefined ? 1 : 0.5};
`
interface ImageTextProps extends TextProps {
  selected?: boolean
  isFocused?: number
}
export const TextContainer = styled.View`
  height: ${rsize(38)}px;
  width: ${rsize(126)}px;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(10)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
`
export const Text = styled(TextGradientBase).attrs(props => ({
  fontSize: props.theme.fontSizes.sm,
  textAlign: "center",
  gradient: props.isFocused === undefined && false || props.selected && true
}))<ImageTextProps>`
  opacity: ${
  props => props.isFocused === undefined && 1
  || !props.selected && 0.5
  || props.selected && 1
  };
`
export const ButtonContent = styled.View<ImageProps>`
  height: ${rsize(150)}px;
  width: ${rsize(150)}px;
  
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(10)}px;
`
