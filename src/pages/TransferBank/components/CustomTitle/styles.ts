import styled from 'styled-components/native';
import TextBold from '../../../../components/TextBold';

export const Container = styled.View`
`;
export const Label = styled.Text`
  font-family: ${props => props.theme.fontFamily.textMedium};
  font-size: ${props => props.theme.fontSizes.sm}px;
  line-height: ${props => props.theme.fontSizes.sm}px;
`;
export const Title = styled(TextBold)`
  font-size: ${props => props.theme.fontSizes.lg}px;
`;
