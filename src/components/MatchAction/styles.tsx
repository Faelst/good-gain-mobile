import styled from 'styled-components/native';
import ButtonGradient from '../ButtonGradient';
import CustomTextBase from '../CustomTextBase';
import TextGradient from '../TextGradient';
import { CardMedia } from '../CustomCard'
import { rsize } from '../../utils/size'

export const Card = styled(CardMedia)`
  height: ${rsize(211)}px;
  width: ${rsize(327)}px;
  align-self: center;
  overflow: hidden;
  padding:
  ${rsize(14)}px
  ${rsize(18)}px
  ${rsize(18)}px
  ${rsize(14)}px;
  margin-top: ${rsize(13)}px;
  margin-bottom: ${rsize(12)}px;
  border-radius: ${rsize(24)}px;
`;
export const Title = styled(CustomTextBase)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg + 2}px;

  margin-bottom: ${rsize(15)}px;
`;
export const View = styled.View`
  height: ${rsize(57)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rsize(13)}px;
`;
export const Strong = styled(TextGradient).attrs(props => ({
  fontSize: props.theme.fontSizes.lg,
}))`
  width: ${rsize(215)}px;
`;
export const Button = styled(ButtonGradient)`
  width: ${rsize(77)}px;
`;
export const Span = styled(CustomTextBase)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg}px;
`;