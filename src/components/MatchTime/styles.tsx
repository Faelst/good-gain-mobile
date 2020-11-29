import styled from 'styled-components/native';
import { LinearGradient as LinearGradientBase } from 'expo-linear-gradient'
import TextBold from '../TextBold';
import { rsize } from '../../utils/size'

export const LinearGradient = styled(LinearGradientBase).attrs(props => ({
  colors: props.theme.colors.gradient
}))`
  height: ${rsize(151)}px;
  width: ${rsize(320)}px;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  padding-top: ${rsize(23)}px;
  padding-bottom: ${rsize(20)}px;
  border-radius: ${rsize(40)}px;
`;
export const Text = styled(TextBold)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.md}px;
  line-height: ${props => props.theme.fontSizes.lg + 2}px;
  color: ${props => props.theme.colors.textLight};
`;
export const Strong = styled(TextBold)`
  font-size: ${rsize(36)}px;
  color: ${props => props.theme.colors.textLight};
`;