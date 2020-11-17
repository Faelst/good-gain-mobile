import styled from 'styled-components/native';
import { TextProps } from 'react-native'
import TextBold from "../../../../components/TextBold";
import { rsize } from "../../../../utils/size";

interface MediaImageProps {
  isFocused?: number
}
export const MediaImageBackground = styled.ImageBackground<MediaImageProps>`
  height: ${rsize(150)}px;
  width: ${rsize(150)}px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(10)}px;
  opacity: ${props => props.isFocused === undefined ? 1 : 0.5};
`
interface MediaTextProps extends TextProps {
  selected?: boolean
}
export const MediaText = styled(TextBold).attrs({
  disabled: true
})<MediaTextProps>`
  height: ${rsize(38)}px;
  width: ${rsize(126)}px;
  border-radius: ${rsize(10)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};

  text-align: center;
  text-align-vertical: center;
  color: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.textColor};
`
