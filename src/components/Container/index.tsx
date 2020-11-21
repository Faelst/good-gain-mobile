import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  margin-top: ${props => props.theme.StatusBarHeight}px;
  background-color: ${props => props.theme.colors.backgroundLight};
`;

export default Container;
