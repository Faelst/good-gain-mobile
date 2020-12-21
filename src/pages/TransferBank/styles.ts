import styled from 'styled-components/native';
import ButtonGradient from '../../components/ButtonGradient';
import { CardMedia } from '../../components/CustomCard';
import CustomTextBase from '../../components/CustomTextBase';
import TextGradient from '../../components/TextGradient';
import { rsize } from '../../utils/size';

export const Title = styled(TextGradient).attrs({
  textAlign: "center",
  fontSize: rsize(24),
})`
  margin-top: ${rsize(49)}px;
`;
export const Button = styled(ButtonGradient)`
  margin-top: ${rsize(11)}px;
  margin-bottom: ${rsize(17)}px;
`;
export const TextButton = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.sm}px;
`;
export const Footer = styled.View`
  height: ${rsize(137)}px;
  width: ${rsize(375)}px;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundLight};
`;
export const ContainerLogo = styled.View`
  height: ${rsize(71)}px;
  width: ${rsize(299)}px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: ${rsize(20)}px;
  overflow: hidden;
  margin-top: ${rsize(13)}px;
  background-color: ${props => props.theme.colors.backgroundLighter};
`;
export const ImageLogo = styled.Image`
`;
export const Strong = styled(TextGradient).attrs({
  fontSize: rsize(16),
})``;
export const Card = styled(CardMedia)`
  height: ${rsize(190)}px;
  width: ${rsize(327)}px;
  align-self: center;
  justify-content: space-between;
  margin-top: ${rsize(14)}px;
  padding: ${rsize(14)}px ${rsize(20)}px;
  border-radius: ${rsize(20)}px;
`;
export const View = styled.View`
  height: ${rsize(34)}px;
  width: ${rsize(211)}px;
  flex-direction: row;
  justify-content: space-between;
`;
