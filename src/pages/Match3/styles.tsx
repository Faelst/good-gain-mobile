import styled from 'styled-components/native';
import ButtonGradient from '../../components/ButtonGradient';
import ButtonOutlinedBase from '../../components/ButtonOutlined';
import { CardMedia } from '../../components/CustomCard';
import CustomTextBase from '../../components/CustomTextBase';
import TextBold from '../../components/TextBold';
import TextGradient from '../../components/TextGradient';
import { rsize } from '../../utils/size';

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
export const SubtitleStrong = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.md + 1}px;
`;
export const Card = styled(CardMedia)`
  height: ${rsize(306)}px;
  width: ${rsize(327)}px;
  align-self: center;
  align-items: center;
  margin-top: ${rsize(45)}px;
  border-radius: ${rsize(20)}px;
`;
export const Description = styled(CustomTextBase)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg + 1}px;

  margin-top: ${rsize(32)}px;
`;
export const Span = styled(TextGradient).attrs(props => ({
  fontSize: props.theme.fontSizes.sm,
  textAlign: 'center',
}))`
  margin-top: ${rsize(17)}px;
  margin-bottom: ${rsize(37)}px;
  text-decoration: underline;
`;
export const Actions = styled.View`
  width: ${rsize(274)}px;
  align-self: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: ${rsize(14)}px;
  margin-bottom: ${rsize(23)}px;
`;
interface StrongProps {
  color?: "primary" | "secondary",
}
export const Strong = styled(TextBold)<StrongProps>`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.lg - 1}px;
  line-height: ${props => props.theme.fontSizes.lg + 1}px;
  color: ${props => 
  !props.color && props.theme.colors.primary ||
  props.color === "primary" &&
  props.theme.colors.primary ||
  props.color === "secondary" &&
  props.theme.colors.backgroundSecondary
  };
`;
export const ButtonOutlined = styled(ButtonOutlinedBase).attrs(props => ({
  bold: true,
  fontSize: props.theme.fontSizes.lg,
}))`
  height: ${rsize(57)}px;
  width: ${rsize(126)}px;
  border-radius: ${rsize(28.5)}px;
`;
export const Button = styled(ButtonGradient)`
  align-self: center;
  margin-top: ${rsize(28)}px;
  margin-bottom: ${rsize(75)}px;
`;
