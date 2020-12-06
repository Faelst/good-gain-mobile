import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import TextBold from '../TextBold';
import ContainerBase from '../Container'
import { rsize } from '../../utils/size';

export const Container = styled(ContainerBase)` 
`;
export const Header = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient,
}))`
  height: ${rsize(160)}px;
  width: 100%;
  padding-left: ${rsize(24)}px;
  padding-right: ${rsize(24)}px;
  margin-top: ${props => -props.theme.StatusBarHeight}px;
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
