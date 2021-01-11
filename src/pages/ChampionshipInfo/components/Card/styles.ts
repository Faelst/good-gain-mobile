import styled from 'styled-components/native';
import { LinearGradient as LinearGradientBase } from 'expo-linear-gradient'
import { rsize } from '../../../../utils/size';

interface ICard {
  color?: "green"
}
export const Container = styled.View<ICard>`
  min-height: ${rsize(71)}px;
  width: ${props => props.color === "green" ? rsize(134) : rsize(81)}px;
  border-radius: ${rsize(20)}px;
  overflow: hidden;
`;
export const LinearGradient = styled(LinearGradientBase).attrs(props => ({
  colors: props.color === "green"
  ? [props.theme.colors.secondary, props.theme.colors.secondary]
  : props.theme.colors.gradient
}))<ICard>`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Strong = styled.Text`
  font-family: ${props => props.theme.fontFamily.titleBold};
  font-size: ${props => props.theme.fontSizes.xxl}px;
  color: ${props => props.theme.colors.textLight};
`;
export const Span = styled(Strong)`
  font-size: ${props => props.theme.fontSizes.lg}px;
`;
