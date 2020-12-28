import styled from 'styled-components/native';
import ButtonGradient from '../../../../components/ButtonGradient';
import CustomTextBase from '../../../../components/CustomTextBase';
import TextBold from '../../../../components/TextBold';
import { rsize } from '../../../../utils/size';

export const Container = styled.View`
  
`;
export const Title = styled(TextBold)`
  margin-top: ${rsize(27)}px;
  text-align: center;
`;
export const Description = styled(CustomTextBase)`
  letter-spacing: ${rsize(0.2)}px;
  font-size: ${props => props.theme.fontSizes.md}px;
  text-align: center;

  width: ${rsize(332)}px;
  align-self: center;
  margin-top: ${rsize(27)}px;
  margin-bottom: ${rsize(34)}px;
`;
export const Span = styled(Description)`
  text-align: left;

  margin-top: ${rsize(14)}px;
`;
export const Button = styled(ButtonGradient)`
  align-self: center;
  margin-bottom: ${rsize(28)}px;
`;
