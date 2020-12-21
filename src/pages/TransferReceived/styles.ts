import styled from 'styled-components/native';
import ButtonGradient from '../../components/ButtonGradient';
import TextBold from '../../components/TextBold';
import { rsize } from '../../utils/size';

import image from '../../images/bn_perfil2.png'
import TextGradient from '../../components/TextGradient';

export const Banner = styled.Image.attrs({
  source: image
})`
  height: ${rsize(317)}px;
  width: ${rsize(275)}px;
  align-self: center;
  margin-top: ${rsize(32)}px;
  margin-bottom: ${rsize(38)}px;
  border-radius: ${rsize(40)}px;
  background-color: ${props => props.theme.colors.textSecondary};
`;
export const Strong = styled(TextGradient).attrs({
  height: rsize(86),
  fontSize: rsize(24),
  lineHeight: rsize(30),
  textAlign: "center",
})`
  font-family: ${props => props.theme.fontFamily.textMedium};
  font-size: ${props => props.theme.fontSizes.xxl-2}px;
  line-height: ${props => props.theme.fontSizes.xxl+5}px;
  text-align: center;

  width: ${rsize(333)}px;
  align-self: center;
`;
export const Span = styled.Text`
  font-family: ${props => props.theme.fontFamily.textMedium};
  font-size: ${props => props.theme.fontSizes.lg+2}px;
  line-height: ${props => props.theme.fontSizes.xxl+2}px;
  text-align: center;

  margin-top: ${rsize(31)}px;
  margin-bottom: ${rsize(27)}px;
`;
export const Footer = styled.View`
  height: ${rsize(137)}px;
  width: ${rsize(375)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};;
`;
export const Button = styled(ButtonGradient)`
  align-self: center;
  margin-top: ${rsize(11)}px;
`;
