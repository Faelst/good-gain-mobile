import styled from 'styled-components/native';
import { rsize } from "../../utils/size";

export const ButtonView = styled.View`
  height: ${rsize(42)}px;
  width: ${rsize(111)}px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(15)}px;
  border-width: ${rsize(1)}px;
  border-color: ${props => props.theme.colors.subtitle};
`
export const ButtonText = styled.Text`
  font-family: ${props => props.theme.fontFamily.textMedium};
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.md}px;
  color: ${props => props.theme.colors.textColor};
`