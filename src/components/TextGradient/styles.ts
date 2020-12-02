import styled, { css } from 'styled-components/native';
import MaskedViewBase from '@react-native-community/masked-view';
import { LinearGradient as LinearGradientBase } from 'expo-linear-gradient'

interface TextProps {
  fontSize: number,
  textAlign?: string,
  gradient?: boolean,
  width?: number,
  fontFamily?: string,
  textDecoration?: string,
}
export const MaskedView = styled(MaskedViewBase)`
  flex: none;
  flex-direction: row;
`
export const View = styled.View`
  justify-content: center;
`
export const Text = styled.Text<TextProps>`
  text-align: ${props => props.textAlign ? props.textAlign : "auto"};
  font-size: ${props => props.fontSize}px;
  line-height: ${props => props.fontSize}px;
  text-decoration: ${props => props.textDecoration};
  font-family: ${props => props.fontFamily
  ? props.fontFamily
  : props.theme.fontFamily.textBold
  };
`;
export const LinearGradient = styled(LinearGradientBase).attrs((props) => ({
  colors: props.gradient
  ? props.theme.colors.gradient
  : [props.theme.colors.textColor,
    props.theme.colors.textColor],
}))<TextProps>`
  height: ${props => props.fontSize}px;
  width: ${props => props.width ? props.width : '100%'};
`;
