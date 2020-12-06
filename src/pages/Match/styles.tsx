import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'
import TextBold from '../../components/TextBold';
import CustomTextBase from '../../components/CustomTextBase';
import CircularProgressBase from '../../components/CircularProgress'
import { CardMedia } from '../../components/CustomCard';
import TextGradient from '../../components/TextGradient';
import { rsize } from '../../utils/size'

import image from '../../images/bg_games.png'

export const ScrollView = styled.ScrollView`
  background-color: ${props => props.theme.colors.backgroundLight};
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
export const CircularProgress = styled(CircularProgressBase)`
  margin-top: ${rsize(-49 - -22)}px;
`
export const Main = styled.View`
  flex: 1;
  width: ${rsize(375)}px;
  margin-top: ${rsize(-49)}px;
  border-top-left-radius: ${rsize(40)}px;
  border-top-right-radius: ${rsize(40)}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
export const Button = styled(CustomTextBase)`
  text-decoration: underline;
  align-self: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.xxl - 1}px;

  margin-bottom: ${rsize(27)}px;
`;
export const SubtitleView = styled.View`
  height: ${rsize(90)}px;
  width: ${rsize(325)}px;
  align-self: center;
  justify-content: space-between;
  margin-top: ${rsize(36)}px;
  margin-bottom: ${rsize(22)}px;
`;
export const Subtitle = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.xl}px;
`;
export const Strong = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.md}px;
`;
export const Card = styled(CardMedia)`
  height: ${rsize(114)}px;
  width: ${rsize(327)}px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  padding: ${rsize(14)}px;
  margin-top: ${rsize(22)}px;
  border-radius: ${rsize(20)}px;
`;
export const Image = styled.Image.attrs({
  source: image
})`
  height: ${rsize(86)}px;
  width: ${rsize(89)}px;
  border-radius: ${rsize(10)}px;
`;
export const TextContainer = styled.View`
  height: ${rsize(84)}px;
  margin-left: ${rsize(13)}px;
  justify-content: space-between;
`;
export const Player = styled(TextGradient).attrs(props => ({
  fontSize: props.theme.fontSizes.lg
}))`
  margin-top: ${rsize(3)}px
`;
