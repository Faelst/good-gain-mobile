import styled from 'styled-components/native';
import CustomTextBase from '../../components/CustomTextBase';
import { rsize } from '../../utils/size';

export const Container = styled.View`
  flex: 1;
  width: ${rsize(327)}px;
  align-self: center;
  margin-top: ${rsize(37)}px;
  margin-bottom: ${rsize(26)}px;
`;
export const Text = styled(CustomTextBase)`
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.md+1}px;
  color: ${props => props.theme.colors.subtitle};
`;
