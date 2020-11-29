import styled from 'styled-components/native';
import { CardMedia } from '../../components/CustomCard';
import CustomTextBase from '../../components/CustomTextBase';
import TextBold from '../../components/TextBold';
import TextGradient from '../../components/TextGradient';
import { rsize } from '../../utils/size';

import image from '../../images/bg_games.png'

export const SubtitleView = styled.View`
  width: ${rsize(325)}px;
  align-self: center;
  justify-content: space-between;
  margin-top: ${rsize(36)}px;
  margin-bottom: ${rsize(47)}px;
`;
export const Subtitle = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.xl}px;
`;
export const SubtitleStrong = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.md + 1}px;
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
  margin-left: ${rsize(13)}px;
`;
export const Title = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.md}px;

  margin-bottom: ${rsize(3)}px;
`;
export const Player = styled(TextGradient).attrs(props => ({
  fontSize: props.theme.fontSizes.lg
}))`
  margin-top: ${rsize(9)}px;
`;
