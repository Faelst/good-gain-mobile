import { useLinkProps } from '@react-navigation/native';
import styled from 'styled-components/native';
import TextBold from '../TextBold';

export const Container = styled.View``;
export const Text = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.xl}px;
  color: ${ props => props.theme.colors.textLight};
`;
