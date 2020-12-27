import styled, { css } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { rsize } from '../../utils/size';
import TextBold from '../../components/TextBold';
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.View`
  flex: 1;
  /* margin-top: ${StatusBar.currentHeight}px; */
  background-color: ${(props) => props.theme.colors.backgroundLight};
`;
export const Header = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient
}))`
  height: ${props => rsize(154+props.theme.StatusBarHeight)}px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  border-radius: ${rsize(20)}px;
  padding:
  ${props =>rsize(46+props.theme.StatusBarHeight)}px
  ${rsize(25)}px
  0
  ${rsize(25)}px;
  margin-top: ${rsize(-22)}px;
`;

export const Title = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xxl-2}px;
  line-height: ${props => props.theme.fontSizes.xxl}px;
  color: ${props => props.theme.colors.textLight};
`;

export const TabControls = styled.View`
  margin-top: ${rsize(-27)}px;
`;

export const Label = styled.View<any>`
  height: ${rsize(31)}px;
  border-radius: ${rsize(15)}px;
  padding: 0 ${rsize(17)}px;
  justify-content: center;
  align-items: center;
  /* margin-left: ${rsize(-40)}px;
  margin-right: ${rsize(15)}px; */

  border: 1px solid rgba(138, 149, 158, 0.25);

  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
    `}
`;

export const Text = styled(TextBold)<any>`
  color: #8d97b5;
  font-size: ${(props) => props.theme.fontSizes.xs}px;
  font-family: ${(props) => props.theme.fontFamily.textRegular};

  ${(props) =>
    props.active &&
    css`
      color: #fff;
      font-family: ${(props) => props.theme.fontFamily.textBold};
    `}
`;

export const TabBarView = styled.View`
  flex-direction: row;
`;
