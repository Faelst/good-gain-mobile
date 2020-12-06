import styled from 'styled-components/native';
import CustomTextBase from '../../../../components/CustomTextBase';
import TextBold from '../../../../components/TextBold';
import ButtonGradient from '../../../../components/ButtonGradient';
import { Feather } from '@expo/vector-icons'
import { rsize } from '../../../../utils/size'

export const Container = styled.View`
  margin-top: ${rsize(17)}px;
  margin-bottom: ${rsize(30)}px;
  align-items: center;
`;
interface StrongProps {
  color?: "primary" | "secondary"
}
export const Title = styled(TextBold)<StrongProps>`
  font-size: ${props => props.theme.fontSizes.xl +1 }px;
  line-height: ${props => props.theme.fontSizes.xl +1 }px;
  margin-bottom: ${rsize(30)}px;
  color: ${props => props.color
  ? props.color === "primary" && props.theme.colors.primary ||
    props.color === "secondary" && props.theme.colors.secondary
  : props.theme.colors.textColor
  };
`;
export const Icon = styled(Feather).attrs({
  name: "check-circle",
  size: rsize(82)
})`
  margin-bottom: ${rsize(20)}px;
  color: ${props => props.theme.colors.secondary};
`;
export const Span = styled(CustomTextBase)`
  width: ${rsize(308)}px;
  margin-top: ${rsize(-4)}px;

  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg}px;
`;
export const Button = styled(ButtonGradient)`
  margin-top: ${rsize(32)}px;
  margin-bottom: ${rsize(11)}px;
`;
export const TextButton = styled(CustomTextBase)`
  text-decoration: underline;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.xxl}px;
`;