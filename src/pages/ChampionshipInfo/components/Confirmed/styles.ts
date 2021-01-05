import styled from 'styled-components/native';
import ButtonGradient from '../../../../components/ButtonGradient';
import CustomTextBase from '../../../../components/CustomTextBase';
import TextBold from '../../../../components/TextBold';
import { rsize } from '../../../../utils/size';

export const Container = styled.View`
  margin-top: ${rsize(20)}px;
`;
export const Title = styled(TextBold)`
  line-height: ${props => props.theme.fontSizes.xxl+5}px;
  margin-top: ${rsize(26)}px;
  text-align: center;
`;
export const Description = styled(CustomTextBase)`
  letter-spacing: ${rsize(0.2)}px;
  font-size: ${props => props.theme.fontSizes.md}px;
  text-align: center;

  width: ${rsize(332)}px;
  align-self: center;
  margin-top: ${rsize(15)}px;
  margin-bottom: ${rsize(22)}px;
`;
export const Span = styled(Description)`
  text-align: left;

  margin-top: ${rsize(14)}px;
`;
export const Button = styled(ButtonGradient)`
  align-self: center;
  margin-top: ${rsize(39)}px;
  margin-bottom: ${rsize(28)}px;
`;
