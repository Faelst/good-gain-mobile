import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'
import { rsize } from '../../../../utils/size';
import TextBold from '../../../../components/TextBold';
import { CardMedia } from '../../../../components/CustomCard';

export const Container = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.gradient
}))`
  height: ${rsize(285)}px;
  width: 100%;
`;

export const Title = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xl}px;
  line-height: ${rsize(33)}px;
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  margin-top: ${rsize(36)}px;
`;
export const TitleStrong = styled(Title)`
  font-size: ${rsize(42)}px;
  line-height: ${rsize(42)}px;
  margin-top: 0;
`;
export const View = styled.View`
  width: ${rsize(301)}px;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${rsize(27)}px;
`;
export const Card = styled(CardMedia)`
  height: ${rsize(71)}px;
  width: ${rsize(144)}px;
  flex-direction: row;
  align-items: center;
  border-radius: ${rsize(20)}px;
  padding: 0 ${rsize(20)}px;
`;
export const Image1 = styled.Image`
  height: ${rsize(23)}px;
  width: ${rsize(23)}px;
  margin-right: ${rsize(17)}px;
`;
export const Image2 = styled(Image1).attrs(props => ({
  tintColor: props.theme.colors.primary,
}))`
  margin-right: ${rsize(25)}px;
  transform: rotate(180deg);
`;

export const CardTitle1 = styled(TextBold)`
  flex: 1;

  font-size: ${props => props.theme.fontSizes.md}px;
  color: ${props => props.theme.colors.secondary};
`;
export const CardTitle2 = styled(CardTitle1)`
  color: ${props => props.theme.colors.primary};
`;


