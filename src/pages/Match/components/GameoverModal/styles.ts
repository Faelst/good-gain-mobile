import styled from 'styled-components/native';
import ButtonGradient from '../../../../components/ButtonGradient';
import CustomTextBase from '../../../../components/CustomTextBase';
import TextBold from '../../../../components/TextBold';
import { rsize } from '../../../../utils/size';

export const Container = styled.View`
  align-items: center;
`;
export const Title = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xl+1}px;
  line-height: ${props => props.theme.fontSizes.xl+1}px;
  color: ${props => props.theme.colors.primary};

  margin-top: ${rsize(17)}px;
`;
export const View = styled.View`
  height: ${rsize(182)}px;
  width: ${rsize(288)}px;
  margin-top: ${rsize(63)}px;
  justify-content: space-between;
`;
export const Strong = styled(TextBold)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg}px;
`;
export const Span = styled(CustomTextBase)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.lg}px;
`;
export const SpanUnderline = styled(Span)`
  text-decoration: underline;
`;
export const Button = styled(ButtonGradient)`
  margin-top: ${rsize(63)}px;
  margin-bottom: ${rsize(31)}px;
`;
export const TextButton = styled(CustomTextBase)`
  text-decoration: underline;
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.xxl-1}px;

  margin-bottom: ${rsize(54)}px;
`;
