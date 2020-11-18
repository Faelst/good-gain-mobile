import styled from 'styled-components/native';
import GradientButton from "../../../../components/GradientButton"
import { LinearGradient } from 'expo-linear-gradient'
import { TextProps } from 'react-native'
import TextBold from "../../../../components/TextBold";
import { rsize } from "../../../../utils/size";

export const Container = styled.View`
  width: ${rsize(375)}px;
  align-items: center;
  border-top-left-radius: ${rsize(25)}px;
  border-top-right-radius: ${rsize(25)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
  padding-bottom: ${rsize(64 - 43)}px;
`
export const Indicator = styled.View`
  height: ${rsize(5)}px;
  width: ${rsize(114)}px;
  margin-top: ${rsize(15)}px;
  border-radius: ${rsize(3)}px;
  background-color: rgba(169,169,169,0.2);
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
export const Button = styled(GradientButton)`
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
export const Text = styled(TextBold).attrs({
  disabled: true
})<ImageTextProps>`
  font-size: ${props => props.theme.fontSizes.sm}px;
  color: ${props => 
    props.isFocused === undefined && props.theme.colors.textColor ||
    props.selected === true && props.theme.colors.primary ||
    props.selected === false && "rgba(56, 56, 56, 0.5)"
  };
`
export const ButtonContent = styled.View<ImageProps>`
  height: ${rsize(150)}px;
  width: ${rsize(150)}px;
  
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(10)}px;
`
