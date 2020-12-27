import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import TextBold from '../TextBold';
import ContainerBase from '../Container'
import { rsize } from '../../utils/size';

export const Container = styled(ContainerBase)`
`;
interface IHeader {
  background?: "green" | "gradient",
  buttonHidden?: boolean,
}
export const Header = styled(LinearGradient).attrs(props => ({
  colors: props.background
  ? props.background === "green"
    ? [props.theme.colors.secondary, props.theme.colors.secondary]
    : props.theme.colors.gradient
  : props.theme.colors.gradient,
}))<IHeader>`
  height: ${rsize(160)}px;
  width: 100%;
  padding-left: ${rsize(24)}px;
  padding-right: ${rsize(24)}px;
  margin-top: ${props => -props.theme.StatusBarHeight}px;
`;
export const HeaderContent = styled.View<IHeader>`
  height: ${rsize(48)}px;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.buttonHidden ? "center" : "space-between" };
  margin-top: ${rsize(46)}px;
`;
export const Title = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xl}px;
  color: ${props => props.theme.colors.textLight};
`;
export const Main = styled.View`
  width: 100%;
  flex-grow: 1;
  margin-top: ${rsize(-49)}px;
  border-top-left-radius: ${rsize(40)}px;
  border-top-right-radius: ${rsize(40)}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
