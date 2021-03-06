import styled from 'styled-components/native';
import ButtonGradientBase from '../../../../components/ButtonGradient';
import ButtonOutlinedBase from '../../../../components/ButtonOutlined';
import { CardMedia } from '../../../../components/CustomCard';
import CustomTextBase from '../../../../components/CustomTextBase';
import TextBold from '../../../../components/TextBold';
import TextGradient from '../../../../components/TextGradient';
import CameraBase from '../../../../components/Camera'
import { rsize } from '../../../../utils/size';

export const Card = styled(CardMedia)`
  height: ${rsize(306)}px;
  width: ${rsize(327)}px;
  align-self: center;
  align-items: center;
  margin-top: ${rsize(45)}px;
  border-radius: ${rsize(20)}px;
  border-color: ${props => props.theme.colors.primary};
`;
export const Description = styled(CustomTextBase)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg + 1}px;

  margin-top: ${rsize(32)}px;
`;
export const Span = styled(TextGradient).attrs(props => ({
  fontFamily: props.theme.fontFamily.textRegular,
  fontSize: props.theme.fontSizes.sm,
  textAlign: 'center',
  textDecoration: 'underline',
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
interface ButtonProps {
  marginTop?: boolean,
}
export const Button = styled(ButtonGradientBase)<ButtonProps>`
  align-self: center;
  margin-top: ${props => props.marginTop ? rsize(10) : rsize(28)}px;
  margin-bottom: ${rsize(75)}px;
`;
export const Camera = styled(CameraBase)`
  width: ${rsize(182)}px;
  align-self: center;
  margin-top: ${rsize(11)}px
`
