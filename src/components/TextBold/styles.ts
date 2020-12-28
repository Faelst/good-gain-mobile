import styled, {css} from "styled-components/native";

interface ITextBold {
  variant?: "body1"
}
export const Text = styled.Text<ITextBold>`
  font-family: ${(props) => props.theme.fontFamily.textBold};
${props => props.variant === "body1"
? css`
  font-size: ${props => props.theme.fontSizes.xxl-2}px;
  color: ${(props) => props.theme.colors.primary};
`
: css`
  /* font-size: ${props => props.theme.fontSizes.sm}px; */
  color: ${(props) => props.theme.colors.textColor};
`};
`;
