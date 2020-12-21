import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { rsize } from '../../../../utils/size';

interface ICustomButton {
  selected?: boolean,
  isFocused?: boolean,
}
export const Container = styled.View`
  border-radius: ${rsize(20)}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
export const BorderGradient = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient
}))<ICustomButton>`
  border-radius: ${rsize(22)}px;
  padding: ${props => props.selected ? rsize(2) : 0}px;
`;
export const Image = styled.Image<ICustomButton>`
  height: ${rsize(71)}px;
  width: ${rsize(299)}px;
  border-color: ${props => props.theme.colors.textSecondary};
  border-width: ${props => props.selected ? 0 : rsize(1)}px;
  border-radius: ${rsize(20)}px;
  opacity: ${props => props.selected ? 1 : props.isFocused ? 1 : 0.5};
  background-color: ${props => props.theme.colors.backgroundLight};
`;
