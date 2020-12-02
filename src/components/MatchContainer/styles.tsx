import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'
import { rsize } from '../../utils/size'
import TextBold from '../TextBold';
import CustomTextBase from '../CustomTextBase';

export const ScrollView = styled.ScrollView`
  background-color: ${props => props.theme.colors.backgroundLighter};
`;

export const Header = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient
}))`
  height: ${rsize(160)}px;
  width: ${rsize(375)}px;
  padding-left: ${rsize(25)}px;
  padding-right: ${rsize(20)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xl}px;
  line-height: ${props => props.theme.fontSizes.xxl - 1}px;
  color: ${props => props.theme.colors.textLight};

  margin-top: ${rsize(-54 - -22)}px;
`;
export const Image = styled.Image`
  height: ${rsize(42)}px;
  width: ${rsize(42)}px;
  margin-top: ${rsize(-49 - -22)}px;
`
export const Main = styled.View`
  flex: 1;
  width: ${rsize(375)}px;
  margin-top: ${rsize(-49)}px;
  border-top-left-radius: ${rsize(40)}px;
  border-top-right-radius: ${rsize(40)}px;
  background-color: #fcf8f8;
`;
export const Button = styled(CustomTextBase)`
  text-decoration: underline;
  align-self: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.xxl - 1}px;

  margin-bottom: ${rsize(27)}px;
`;