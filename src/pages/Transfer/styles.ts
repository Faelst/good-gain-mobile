import styled from 'styled-components/native';
import ButtonGradient from '../../components/ButtonGradient';
import CustomTextBase from '../../components/CustomTextBase';
import TextGradient from '../../components/TextGradient';
import { rsize } from '../../utils/size';

export const Container = styled.View`
  align-items: center;
  margin-top: ${rsize(49)}px;
`;
export const Title = styled(TextGradient).attrs({
  textAlign: "center",
  fontSize: rsize(24),
})``;
export const Span = styled.Text`
  font-family: ${props => props.theme.fontFamily.textMedium};
  font-size: ${props => props.theme.fontSizes.lg+2}px;

  margin-top: ${rsize(26)}px;
`;
export const Button = styled(ButtonGradient)`
  margin-top: ${rsize(11)}px;
  margin-bottom: ${rsize(17)}px;
`;
export const TextButton = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.sm}px;
`;
export const Footer = styled.View`
  height: ${rsize(137)}px;
  width: ${rsize(375)}px;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
