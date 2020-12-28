import styled from 'styled-components/native';
import ButtonGradient from '../../../../components/ButtonGradient';
import CustomTextBase from '../../../../components/CustomTextBase';
import TextBold from '../../../../components/TextBold';
import { rsize } from '../../../../utils/size';

export const Container = styled.View`
  margin-top: ${rsize(20)}px;
`;
export const Title = styled(TextBold)`
  margin-top: ${rsize(27)}px;
  text-align: center;
  line-height: ${props => props.theme.fontSizes.xxl+5}px;
`;
export const Description = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.md}px;
  letter-spacing: ${rsize(0.2)}px;
  text-align: center;

  width: ${rsize(332)}px;
  align-self: center;
  margin-top: ${rsize(46)}px;
`;
export const Strong = styled(TextBold)`
  letter-spacing: ${rsize(0.2)}px;
  font-size: ${props => props.theme.fontSizes.md}px;
`;
export const H1 = styled(TextBold)`
  font-size: ${rsize(34)}px;
  text-align: center;
  color: ${props => props.theme.colors.secondary};

  margin-top: ${rsize(37)}px;
  margin-bottom: ${rsize(59)}px;
`;
export const Button = styled(ButtonGradient)`
  align-self: center;
  margin-bottom: ${rsize(28)}px;
`;
