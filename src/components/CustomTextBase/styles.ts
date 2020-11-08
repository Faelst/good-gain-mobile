import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.textRegular};
  color: ${(props) => props.theme.colors.textColor};
`;
